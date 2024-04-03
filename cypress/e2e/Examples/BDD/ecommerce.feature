Feature: End To End ECommerce Application

    Regression Testing

    Scenario: Ecommerce ProductsDelivery
    Given I open ECommerce Page
    When I Add Items to the cart
    And  Validate the total,by comparing amounts
    Then Select the Country, Submit and verify 

    # Scenario:Filling the form to shop
    # Given I open ECommerce Page
    # When Fill the form
    # Then Validate the form behaviour
    # And select the Shop page