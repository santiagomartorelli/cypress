Feature: Google Search

    Scenario Outline: Perform a Google search
        Given I open Google search page
        When I search for "<query>"
        Then I should see results related to "<query>"

        Examples:
            | query      |
            | Cypress    |
            | JavaScript |
