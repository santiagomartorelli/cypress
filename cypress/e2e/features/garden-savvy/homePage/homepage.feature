Feature: Homepage
    As a user, I want to be able to navigate to the homepage and see the correct content
    so that I can learn more about the website and its offerings.

    Scenario: View homepage
        Given I am on the homepage
        When I view the page
        Then I should see the correct title