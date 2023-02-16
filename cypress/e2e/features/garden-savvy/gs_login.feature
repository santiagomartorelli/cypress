Feature: Garden Savvy - Login
    As a user, I want to be able to login

    Scenario: Title on GS Homepage
        Given I navigate to the "/?nocaptcha=1" page of gardensavvy.com
        Then I login as "santiago+prod@lumina.nyc"
        And I should be redirected to the "/my-account/" page