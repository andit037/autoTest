const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage{
    /**
     * define selectors using getter methods
     */
    get categoryPage () {
        return $('//a/p[contains(text(),"Kategori")]');
    }

    chooseCategory(category){
        return $(`//a[@data-testid="main-category"]/span[contains(text(),'${category}')]`);
    }

    products(productName){
        return $(`//*[contains(text(),'${productName}')]`)
    }

    get plusButton(){
        return $('(//button[@class="btn btn-default"]/i[@class="fa fa-plus highlight"])[2]')
    }

    get minusButton(){
        return $('(//button[@class="btn btn-default"]/i[@class="fa fa-minus highlight"])[2]')
    }

    get beliSekarangButton(){
        return $('button[data-testid="buy-now"]')
    }

    get orderQty(){
        return $('(//tfoot/tr/td/b[@class="ng-binding"])[1]')
    }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async homePageCategory (category) {
        await this.categoryPage.waitForDisplayed(5000);
        (await this.categoryPage).moveTo();
        (await this.chooseCategory(category)).click();
    }

    async chooseProduct (productName) {
        await browser.pause(1000)
        await browser.scroll(0, 400);
        await this.products(productName).waitForDisplayed(5000);
        await this.products(productName).click();
        await this.beliSekarangButton.waitForDisplayed(5000);
        (await this.beliSekarangButton).click();
    }

    async clickAddProduct (totalProduct) {
        await this.plusButton.waitForDisplayed(5000);
        var isCheck = true;
        while (isCheck){
            const el = await this.orderQty;
            const elText = await el.getText();
            var optArr = await elText.split(" ");
            await this.plusButton.click()
            await browser.pause(1000)
            if (await optArr[0] == totalProduct){
                await this.minusButton.click()
                isCheck = false;
            }
        }
    }
}

module.exports = new HomePage();
