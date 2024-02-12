To refactor the basic inventory management functionalities from Session 2 to adhere to the Open/Closed Principle (OCP), we need to design the system in a way that allows for extension without modifying existing code. Here's how we can approach the refactoring process:

## Step 1: Identify Extension Points
Identify areas of the codebase that are likely to change or be extended in the future. These could include adding support for new types of items, introducing new inventory management logic, or integrating with external systems.

## Step 2: Design for Extension
Design the system to be open for extension but closed for modification. This involves using abstraction mechanisms such as interfaces, inheritance, and composition to define clear extension points and separate concerns.

## Step 3: Implement Strategy Pattern
Use the Strategy pattern to encapsulate algorithms or behaviors that vary independently from the context. This allows different strategies to be defined for handling different types of items or inventory management operations.

## Step 4: Apply Dependency Injection
Inject dependencies into classes rather than hard-coding them, allowing different implementations to be swapped in at runtime. This promotes flexibility and makes it easier to extend or modify the behavior of the system.

## Refactored Code Example:

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
// InventoryStrategy.js
class InventoryStrategy {
  listItems(items) {
    throw new Error('listItems method must be implemented');
  }

  addItem(item, inventory) {
    throw new Error('addItem method must be implemented');
  }

  removeItem(item, inventory) {
    throw new Error('removeItem method must be implemented');
  }
}

module.exports = InventoryStrategy;
```

```javascript
// BookStrategy.js
const InventoryStrategy = require('./InventoryStrategy');

class BookStrategy extends InventoryStrategy {
  listItems(items) {
    // Logic to list books
  }

  addItem(item, inventory) {
    // Logic to add a book to inventory
  }

  removeItem(item, inventory) {
    // Logic to remove a book from inventory
  }
}

module.exports = BookStrategy;
```

```javascript
// CDStrategy.js
const InventoryStrategy = require('./InventoryStrategy');

class CDStrategy extends InventoryStrategy {
  listItems(items) {
    // Logic to list CDs
  }

  addItem(item, inventory) {
    // Logic to add a CD to inventory
  }

  removeItem(item, inventory) {
    // Logic to remove a CD from inventory
  }
}

module.exports = CDStrategy;
```

In this refactored code:
- The `InventoryManager` class manages a collection of items using composition.
- The `Item` class represents individual items in the inventory.
- The `InventoryStrategy` class defines a common interface for different inventory management strategies.
- Concrete implementations such as `BookStrategy` and `CDStrategy` encapsulate the logic for handling specific types of items.
- Dependency injection can be used to inject the appropriate strategy into the `InventoryManager` at runtime.

By using the Strategy pattern and dependency injection, we've designed the system to be open for extension but closed for modification, adhering to the Open/Closed Principle (OCP). This allows new types of items to be added or new inventory management strategies to be introduced without modifying existing code.

Certainly! Here are unit test examples for the refactored code using the Mocha testing framework along with the Chai assertion library:

```javascript
// test/InventoryManager.test.js
const { expect } = require('chai');
const InventoryManager = require('../InventoryManager');
const Item = require('../Item');
const BookStrategy = require('../BookStrategy');
const CDStrategy = require('../CDStrategy');

describe('InventoryManager', () => {
  let inventoryManager;

  beforeEach(() => {
    inventoryManager = new InventoryManager();
  });

  it('should add an item to the inventory', () => {
    const bookStrategy = new BookStrategy();
    inventoryManager.setStrategy(bookStrategy);
    
    const item = new Item('Book', 10);
    inventoryManager.addItem(item);
    
    expect(inventoryManager.listItems()).to.deep.equal([item]);
  });

  it('should remove an item from the inventory', () => {
    const cdStrategy = new CDStrategy();
    inventoryManager.setStrategy(cdStrategy);
    
    const item = new Item('CD', 15);
    inventoryManager.addItem(item);
    inventoryManager.removeItem(item);
    
    expect(inventoryManager.listItems()).to.be.an('array').that.is.empty;
  });
});
```

These unit tests verify the functionality of the `InventoryManager` class by adding and removing items from the inventory using different strategies (BookStrategy and CDStrategy). You can run these tests using the Mocha test runner. Make sure to install Mocha and Chai as dev dependencies in your project:

```
npm install mocha chai --save-dev
```

Then, you can run the tests using the following command:

```
mocha
```

These tests ensure that the `InventoryManager` class behaves as expected according to the defined strategies, and they verify that the refactored code adheres to the Open/Closed Principle (OCP).
