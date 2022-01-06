# My Random Password Generator

In this project I modified starter code to enable the user to generate random passwords based on criteria that they’ve selected. The purpose of this project is to demonstrate my use of JavaScript. I express this particularly through my use of: alerts, functions and for-loops. The possible error that may still occur is when the user chooses more than one group of characters, the password generated may not include all of the selected groups. E.g. password length = '6', character choice = 'lowercase and uppercase', password generated = 'absodn' (in this case the password does not include uppercase). I will however fix this issue once I understand JavaScript to a higher level.

## Criteria that I met to achieve this

* When the user clicks on the button to generate a password they are presented with a series of password prompts for password criteria.
* When the user is prompted for password criteria they select which ones they want to include in their password.
* The password chosen by the user has to be between 8-128 characters long.
* The character types that can be included and chosen from for the password are: lowercase,uppercase,numeric, and/or special characters.
* When the user has answered the prompts then their input should be validated and at least one character type should be selected.
* Once the user has answered all the prompts then a password is generated that matches their selected criteria.
* When the password is generated it is displayed written on the page.
