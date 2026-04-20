Feature: Login functionality
 
 Scenario Outline: Successful login
  
  Given User opens login page
  When User logs in with "<username>" and "<password>"

  Examples:
   | username                          | password  |
   | admin@practicesoftwaretesting.com | welcome01 |