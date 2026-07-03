Feature: Book a destination
  As a traveler
  I want to book a destination
  So I can travel to space

  Background:
    Given the traveler opens the application

  @critical
  Scenario Outline: Book a destination successfully
    When the traveler searches a trip with

      | departure | <departure> |
      | return    | <return>    |
      | adults    | <adults>    |
      | children  | <children>  |
    And filters destinations by maximum price "<price>"
    And traveler presses the button "Select Destination"
    And traveler presses the button "Load more"
    And chooses destination "<destination>"
    And traveler presses the button "Book"
    And completes the booking form with
      | name  | Alexandra QA                       |
      | email | alexandra@test.com                 |
      | ssn   | 123-45-6789                        |
      | phone | +17877039199                       |
      | file  | src/resources/health-insurance.pdf |

    And applies promo code "<promo>"
    And accepts the terms
    And confirms payment

    # And traveler presses the button "Pay now"
    Then the booking should be completed

    Examples:
      | departure  | return     | adults | children | price | destination | promo  |
      | 2026-08-10 | 2026-08-20 | 2      | 1        | 904   | Flagstaff   | SALE20 |
      | 2026-09-05 | 2026-09-15 | 1      | 2        | 400   | Tongli      | TEST10 |