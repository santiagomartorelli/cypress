Feature: Homepage
    As a user, I want to be able to navigate to the homepage submit the form as a

    Scenario: View homepage
        Given I navigate to the "/" page of flatrate.com
        When I type "John Smith" in the "from" field on "Flatrate - HomePage"
        And I type "John Smith" in the "to" field on "Flatrate - HomePage"
        And I click "next" on "Flatrate - HomePage"

