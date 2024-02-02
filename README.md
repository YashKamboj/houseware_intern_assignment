# Tests

Included a suite of tests to ensure that it functions correctly and reliably.  <br />


All the tests are placed inside src/__tests__ folder  <br />

 To run the tests, execute the following command:  <br />
 
In the project directory, you can run:  <br />

### `npm test`

# Test Cases

## item.test.js

1. Render Test: Verifies that the Item component renders successfully. (unit test)
2. Test to check the Toggles completion when checkbox is clicked correctly. (unit test)
3. Test to check the toggles completion when item is removed correctly .(unit test)
4. Test to check the handleUpdate is called with the correct title correctly. (unit test)

## input.test.js

1. Render Test: Verifies that the Input component renders successfully. (unit test)
2. Test to check the submits input value on Enter key press correctly. (unit test)

## footer.test.js

1. Render Test: Verifies that the Footer component renders successfully. (unit test)
2. Test to check the Clear completed button triggers action correctly (had to add data-testid in the file to call in the test file) (unit test)

Mostly unit tests were used to check the working of the functions.
