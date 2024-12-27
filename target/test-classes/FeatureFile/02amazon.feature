@Feature2
Feature:  To validate Login functionality of amazon application  
 
Background:
Given To launch the browser
@Smoke 
Scenario: To validate login by using nagative username and pasitive password 

When  To pass the value in emailId or phnum in emailfield
And To click a continue btn
And To pass the value in passwordfield
And  To click signin  btn
Then Close the browser

@sanity , @regression
Scenario: To validate login by using valied username and invalied password 
When  pass the value in emailId or phnum in emailfield
And click a continue btn
And  pass the value in passwordfield
And  click signin  btn
Then browser close Amazon
