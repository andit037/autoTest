const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const { authenticate } = require('@google-cloud/local-auth');
const { google } = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

class Gmail {
  async retrieveOtp() {
    const auth = await this.authorize();
    const list_message = await this.getListMessage(auth, 'OTP+Ralali');
    const fullMessage = await this.getMessage(auth, list_message);
    return fullMessage.data.snippet;
  }

  async authorize() {
    var client = await this.loadSavedCredentialsIfExist();
    if (client) {
      return client;
    }
    client = await authenticate({
      scopes: SCOPES,
      keyfilePath: CREDENTIALS_PATH,
    });
    if (client.credentials) {
      await this.saveCredentials(client);
    }
    return client;
  }

  async loadSavedCredentialsIfExist() {
    try {
      const content = await fs.readFile(TOKEN_PATH);
      const credentials = JSON.parse(content);
      return google.auth.fromJSON(credentials);
    } catch (err) {
        return null;
    }
  }

  async saveCredentials(client) {
    const content = await fs.readFile(CREDENTIALS_PATH);
    const keys = JSON.parse(content);
    const key = keys.installed || keys.web;
    const payload = JSON.stringify({
      type: 'authorized_user',
      client_id: key.client_id,
      client_secret: key.client_secret,
      refresh_token: client.credentials.refresh_token,
    });
    await fs.writeFile(TOKEN_PATH, payload);
  }

  async getListMessage(auth, search_keyword) {
    const gmail = google.gmail({ version: 'v1', auth, timeout: 210000 });
    return await gmail.users.messages.list({
      userId: 'me',
      q: search_keyword
    });
  }

  async getMessage(auth, list_message) {
    const gmail = google.gmail({ version: 'v1', auth, timeout: 210000 });
    return await gmail.users.messages.get({
      userId: 'me',
      id: list_message.data.messages[0].id,
      format: 'full'
    });
  }
}

module.exports = new Gmail();
