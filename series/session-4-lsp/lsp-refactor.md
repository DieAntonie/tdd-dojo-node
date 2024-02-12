To refactor the basic inventory management functionalities from Session 3 to adhere to the Liskov Substitution Principle (LSP), we need to ensure that subclasses can be substituted for their base classes without altering the correctness of the program. Here's how we can approach the refactoring process:

## Step 1: Identify Substitutability Issues
Identify areas in the codebase where subclasses behave inconsistently with their base classes or violate the contract established by their base classes. Look for methods or properties that are specific to subclasses and are not applicable to all items.

## Step 2: Design for Substitutability
Design the system to support substitutability by ensuring that subclasses adhere to the interface and behavior established by their base classes. Avoid introducing methods or properties in subclasses that are not applicable to all items or that modify the behavior of inherited methods.

## Step 3: Refactor Class Hierarchy
Refactor the class hierarchy to promote substitutability and consistency across subclasses. Ensure that methods and properties are inherited from the base class only if they are applicable to all items, and provide additional methods or properties in subclasses only if necessary.

## Refactored Code Example:

```javascript
// Item.js
class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

module.exports = Item;
```

```javascript
// Book.js
const Item = require('./Item');

class Book extends Item {
  constructor(name, price, author) {
    super(name, price);
    this.author = author;
  }
}

module.exports = Book;
```

```javascript
// CD.js
const Item = require('./Item');

class CD extends Item {
  constructor(name, price, artist) {
    super(name, price);
    this.artist = artist;
  }
}

module.exports = CD;
```

```javascript
// InventoryManager.js
class InventoryManager {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    this.items = this.items.filter(i => i !== item);
  }

  listItems() {
    return this.items;
  }
}

module.exports = InventoryManager;
```

In this refactored code:
- The `Book` and `CD` classes inherit from the `Item` class, ensuring that they can be substituted for `Item` objects without altering the correctness of the program.
- The `InventoryManager` class remains unchanged and continues to work with `Item` objects, allowing it to be used uniformly with `Book` and `CD` objects.

By ensuring that subclasses (`Book` and `CD`) adhere to the interface and behavior established by their base class (`Item`), we promote substitutability and adhere to the Liskov Substitution Principle (LSP). This allows the inventory management system to be more flexible, maintainable, and correct.

Here are unit test examples for the refactored code using only the Node.js built-in `assert` module:

```javascript
// test/InventoryManager.test.js
const assert = require('assert');
const InventoryManager = require('../InventoryManager');
const Item = require('../Item');
const Book = require('../Book');
const CD = require('../CD');

describe('InventoryManager', () => {
  let inventoryManager;

  beforeEach(() => {
    inventoryManager = new InventoryManager();
  });

  it('should add an item to the inventory', () => {
    const item = new Item('Item', 10);
    inventoryManager.addItem(item);

    assert.deepStrictEqual(inventoryManager.listItems(), [item]);
  });

  it('should remove an item from the inventory', () => {
    const item = new Item('Item', 10);
    inventoryManager.addItem(item);
    inventoryManager.removeItem(item);

    assert.deepStrictEqual(inventoryManager.listItems(), []);
  });
});

describe('Book', () => {
  it('should create a book with name, price, and author', () => {
    const book = new Book('Book', 15, 'Author');

    assert.strictEqual(book.name, 'Book');
    assert.strictEqual(book.price, 15);
    assert.strictEqual(book.author, 'Author');
  });
});

describe('CD', () => {
  it('should create a CD with name, price, and artist', () => {
    const cd = new CD('CD', 20, 'Artist');

    assert.strictEqual(cd.name, 'CD');
    assert.strictEqual(cd.price, 20);
    assert.strictEqual(cd.artist, 'Artist');
  });
});
```

These unit tests verify the functionality of the `InventoryManager`, `Book`, and `CD` classes. They use the built-in `assert` module to make assertions about the behavior of the code. You can run these tests using the Node.js test runner.
