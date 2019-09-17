# CIS557-hw2: JavaScript + DOM + ESLint

## Instructions:
 
In this assignment, you will create a webapp implementing “Guess The Celebrity” game.
You will create:
- A single ***HTML document*** 
- A single ***CSS document*** 
- A single ***JavaScript document***

## Setup:
This project uses ESLint, a Node.js module. We then need to have Node.JS and ESLint installed.
 
- Install Node.JS
Download and install the latest Long Term Support (LTS) version of Node.js (currently 10.16.3).
Get it at https://nodejs.org/en/. Verify that Node.JS and npm (node.js package manager) were properly installed by running the commands

`node -v`

`npm -v`

- Install ESLint
Inside your hw2 directory,  follow the instructions to install ESLint: https://eslint.org/docs/user-guide/getting-started

## Specifications:

- The content of the webpage must be created by your javascript code (html elements, events handling).  (20points)
- The user should enter their name (it will be stored along with their score). This should be validated by your program as an alphanumeric string. (10points)
- Your webapp should display a picture of a celebrity one at a time and ask the user the guess/pick the name of the celebrity. You should provide 4 potential answers with one being the correct one. (10points)
- Your webapp should contain at least 10 celebrities. (5points)
- Your webapp should pick the celebrity randomly. (10points)
- Your webapp should keep track of the user’s score.  (5points)
- Your webapp should display three scores: the current score, the current user’s best score, and the overall best score on the computer/browser. (10points)
- Your webapp should store the user names along with the scores (current, best personal, all time best) in the browser’s localstorage. The scores must be updated correctly (10points)
- Your webapp doesn’t need to look exactly like the image below, but should contain all the elements displayed.

![alt text](https://github.com/ericfouh/hw2/blob/master/hw2-example.png)

## Validation:
- Your JavaScript must be clean, readable, and ***ESLint warning-free*** (20 points)

- You may not use jQuery or any other JavaScript library package in this assignment. The goal of this activity is to get comfortable with low-level foundational JavaScript/DOM features. You may, however, use any JavaScript built-in functions. 

## Submission:
- Do not forget to regularly commit your work to GitHub.
- Only the last push before the due date will be graded.

## Useful links:
- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
