# Lab 8 - Starter

1. I would put my automated tests inside a Github Action that runs whenever code is pushed. You should still run targeted tests on your code before it is pushed to catch bugs in the code, however, the code that you push will more than likely interact with a lot more code and affect the output of the other code so you need to have all of your previous tests run everytime changes are made so you know that pushing this new code didn't break any of your old code.

2. No, I would not use E2E testing just to check if one function was returning the correct output because that could easily be acheived by unit testing instead. E2E testing is meant to test interactions between different functions and components, not just one function. E2E testing is meant to test if the feature performs as expected when being interacted with from all possible angles by the user using interactive elements. 

3. No I would not. Since this is an entire feature that interacts with many other features, I would need to do E2E testing to test if the message was sent and successfully recveived, probably involving many individual unit tests in addition to calling many functions to simulate a user sending a message.

4. Yes I would. This can be tested using just one unit test and the code that is being tested does not interact with many or any other components in the code. All one needs to do is call this function with a message over 80 characters and see if the output gives the expected result.
