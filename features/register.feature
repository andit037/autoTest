Feature: The Internet Ralali Website

  Scenario Outline: As a user, I can register into dashboard page
    Given I am on the register page
    When I register with <fullname> and <username> and <password> and <password_Confirmation>
    And I insert the OTP on register page
    Then I see my profile <fullname> on the dashboard page

    Examples: 
      | fullname | username                  | password       | password_Confirmation |
      | Bagus    | testautomate930@gmail.com | dfbsdf42369%*D | dfbsdf42369%*D        |

  Scenario Outline: As a user, I can see error message on each of mandatory field
    Given I am on the register page
    When I register with <fullname> and <username> and <password> and <password_Confirmation>
    Then I see error message <error_messages>

    Examples: 
      | fullname     | username            | password          | password_Confirmation | error_messages                                                         |
      | s            |                     |                   |                       | Format Nama salah                                                      |
      | @#*@*@*@*    |                     |                   |                       | Format Nama salah                                                      |
      | testAutomate |                   2 |                   |                       | Format Email atau Nomor Ponsel salah                                   |
      | testAutomate |                0856 |                   |                       | Format Email atau Nomor Ponsel salah                                   |
      | testAutomate | @                   |                   |                       | Format Email atau Nomor Ponsel salah                                   |
      | testAutomate | testemail           |                   |                       | Format Email atau Nomor Ponsel salah                                   |
      | testAutomate | testemail@          |                   |                       | Format Email atau Nomor Ponsel salah                                   |
      | testAutomate | testemail@gmail.com | a                 |                       | Kata sandi tidak boleh mengandung email ataupun nama Anda              |
      | testAutomate | testemail@gmail.com | abc               |                       | Min. 8 - 50 karakter terdiri dari huruf kecil besar, angka, dan simbol |
      | testAutomate | testemail@gmail.com | fsd@dfsfsdfsdAdw1 | abc                   | Kolom ulangi kata sandi tidak sesuai                                   |