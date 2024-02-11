Below are unit tests for basic inventory management functionalities using only the built-in Node.js assert module and organizing the tests using the `describe` and `it` helper functions:

```javascript
// inventory.test.js

import assert from "node:assert/strict";
import { describe, it } from "node:test";
import inventory from '../inventory.js';

describe('Inventory Management', () => {
  describe('addBookToInventory', () => {
    it('should add a book to the inventory', () => {
      // given
      const book = {
        title: 'Test Book',
        author: 'Test Author',
        quantity: 1
      };
      
      // when
      inventory.addBookToInventory(book);
      
      // then
      assert.deepStrictEqual(inventory.getInventory(), [book]);
    });
  });
  
  describe('listBooksInInventory', () => {
    it('should return all books in the inventory', () => {
      // given
      const expectedBooks = [
        { title: 'Book 1', author: 'Author 1', quantity: 3 },
        { title: 'Book 2', author: 'Author 2', quantity: 2 },
        { title: 'Book 3', author: 'Author 3', quantity: 5 }
      ];
      
      // when
      const actualBooks = inventory.listBooksInInventory();
      
      // then
      assert.deepStrictEqual(actualBooks, expectedBooks);
    });
  });
  
  describe('removeBookFromInventory', () => {
    it('should remove a book from the inventory', () => {
      // given
      const bookToRemove = {
        title: 'Book to Remove',
        author: 'Author to Remove',
        quantity: 1
      };
      inventory.addBookToInventory(bookToRemove);
      
      // when
      inventory.removeBookFromInventory(bookToRemove);
      
      // then
      assert.deepStrictEqual(inventory.getInventory().includes(bookToRemove), false);
    });
  });
});
```

These tests cover adding books, listing books, and removing books from the inventory. The describe function is used to group related tests together, and the it function is used to define individual test cases within each group.

You can run these tests using Node.js by executing `node inventory.test.js` in your terminal. These tests will verify that the basic inventory management functionalities are working correctly.
