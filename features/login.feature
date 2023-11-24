Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    And I see OTP on my gmail
    #Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | testautomate930@gmail.com | You logged into a secure area! |
      #| foobar   | barfoo               | Your username is invalid!      |
