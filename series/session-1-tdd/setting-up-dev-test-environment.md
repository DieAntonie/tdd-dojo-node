Set up a testing framework, using only Node.js (*without additional packages*), by utilizing the built-in `assert` module for writing and running tests.<br/>
Here's a step-by-step guide:

## Step 1: Install Node.js (*If not already installed*)
If you haven't already installed Node.js, download and install it from the official website: [Node.js Downloads](https://nodejs.org/en/download/).

## Step 2: Create a New Project Directory
1. Open your terminal or command prompt.
2. Navigate to the directory where you want to create your project.
3. Run the following command to create a new directory for your project:
   ```
   mkdir my-project
   ```

## Step 3: Initialize a New Node.js Project
1. Navigate into the newly created project directory:
   ```
   cd my-project
   ```
2. Run the following command to initialize a new Node.js project:
   ```
   npm init -y
   ```
   This command creates a `package.json` file with default values.

## Step 4: Create Test Files
1. Create a directory named `test` in your project directory:
   ```
   mkdir test
   ```
2. Inside the `test` directory, create test files with names ending in `.js`. For example:
   ```
   touch test/example.test.js
   ```

## Step 5: Write Your First Test
1. Open the test file you created (`example.test.js`) in a text editor.
2. Write a simple test using the built-in `assert` module. For example:
   ```javascript
   // test/example.test.js
   import assert from "node:assert/strict";
   import { describe, it } from "node:test";
   
   describe("Addition", () => {
       it("adds correctly", () => {
         // given
         const addition = (a, b) => a + b;

         // when
         const result = addition(1, 2);

         // then
         assert.strictEqual(result, 3);
       });
   });
   ```

## Step 6: Run Tests
1. In your terminal, run the following command to execute your tests:
   ```
   node test/example.test.js
   ```

## Step 7: See Test Results
1. Node.js will run your tests and display the results in the terminal.
2. If the test passes, there will be no output. If it fails, an error will be displayed indicating the failure.

## Additional Notes:
- You can write more complex tests using the `assert` module. Refer to the [Node.js assert documentation](https://nodejs.org/dist/latest-v16.x/docs/api/assert.html) for available assertion methods.
- While using only the built-in `assert` module provides basic testing capabilities, using dedicated testing frameworks like Jest or Mocha can offer more features and flexibility for testing complex applications.

That's it! You've now set up a basic development environment and testing framework using only Node.js and the built-in `assert` module. You can continue adding more tests and developing your project following the Test-Driven Development (TDD) approach.
