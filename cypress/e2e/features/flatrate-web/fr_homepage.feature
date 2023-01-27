Feature: Flatrate Homepage
    The ability for users to navigate to the homepage, fill out and submit a form on the Flatrate website

    Scenario: Submit Lead
        Given I navigate to the "/" page of flatrate.com
        When I type "123 test street" in the "from" field on "Flatrate - HomePage"
        And I type "456 test street" in the "to" field on "Flatrate - HomePage"
        And I click "next" on "Flatrate - HomePage"
        And I set the date
        And I select the 'Studio Apt' option from the homesize dropdown
        And I click "next" on "Flatrate - HomePage"
        And I type "Lumina Test" in the "name" field on "Flatrate - HomePage"
        And I type "garbage@lumina.nyc" in the "email" field on "Flatrate - HomePage"
        And I type "2223333444" in the "phone" field on "Flatrate - HomePage"
        And I click "continue" on "Flatrate - HomePage"
        And I click "moved_no" on "Flatrate - HomePage"
        And I click "moved_before_next" on "Flatrate - HomePage"
        And I click "recommend_yes" on "Flatrate - HomePage"
        And I click "recommend_next" on "Flatrate - HomePage"
        And I type "Lumina Test" in the "recommend_name" field on "Flatrate - HomePage"
        And I click "recommend_name_next" on "Flatrate - HomePage"
        And I type "Lumina Test" in the "general_comments" field on "Flatrate - HomePage"
        And I click "general_comments_next" on "Flatrate - HomePage"
# And I click "get_my_quote" on "Flatrate - HomePage"
# Then I verify thank you message displays "Thank you, Lumina, for considering us for your upcoming move."