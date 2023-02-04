Feature: Shopping Feature

    This feature contains all test related to Shopping
    Like adding itmes to cart and checking out.
    Scenario: Add items to cart
        Given I have logged in
        When I add carrot juice to shopping cart
        And I open shopping cart
        Then I see added items to a list
    
    Scenario: Checkout and confirm item list
        Given I have logged in
        And I have products in shopping cart
        When I open shopping cart
        And I checkout
        And I enter my country
        And I enter my mobile number
        And I enter zip code
        And I enter my address
        And I enter my city
        And I enter my State
        And I submit and select my info
        And I press continue
        And I select fast delivery
        And I add and select my new card info
        And I place my order
        Then I see successful order details