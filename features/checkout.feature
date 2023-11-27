Feature: The Internet Ralali Website

  Scenario Outline: As a user, I can filter of category on homepage
    Given I am on the login page
    When I login with <username> and <password>
    And I see my profile <fullname> on the dashboard page
    And I filter <category_filter> on category product
    And I choose <product_name> of product
    And I put <total> of product on cart
    Then I see <total_products> on cart

    Examples: 
      | username                          | password | fullname | category_filter         | product_name                                                | total | total_products  |
      | bh.a.ra.th.k.all.adi38@gmail.com  | P@ssw0rd | Bagus    | Beauty, Sport & Fashion | LAMSON FACE MASK Masker Kesehatan Karet 3ply 1Box Isi 50pcs |    22 |       22 items  |
      | s.e.rnav.il.lare.s@googlemail.com | P@ssw0rd | Dony     | Electronics             | Quantum Kompor Gas [1 Tungku]  101 RB-White                 |    23 |       23 items  |
