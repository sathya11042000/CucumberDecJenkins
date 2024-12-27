@Feature1

Feature: To validate Login functionality of Facebook application 

Background: 
Given  To launch the chrome browser and hit the url

 @Regression
Scenario: To validate invalid emailId and valid password
When To pass the invalid mailId in emailfield

| username   | Gowri |
| password   | 45678 |
| email      | sst@gmail.com |

And To pass the valid password in passwordfield
| p1               | p2               | p3             | 
| Selenium         | sst123@gmail.com | 12345678       | 
| java             | G                |9076542345      |  
| python           | manual           |  testing       |  
                   

And To click the login button
Then To close the chrome browser
@Smoke
Scenario Outline: To validate invalid emailId and invalid password

When Pass the invalid mailId "<email field>" in emailfield
And Pass the invalid password "<password field>" in passwordfield
And Click the login button
Then Close the chrome browser

Examples:
|email field|password field|
|java123@gmail.com|java|
|selenium123@gmail.cim|selenium|
|framework123@gmail.com|framework|
|sql123@gmail.com|sql|

