To refactor the basic inventory management functionalities from Session 5 to adhere to the Dependency Inversion Principle (DIP), we need to introduce abstractions that decouple high-level modules from low-level implementation details. Here's how we can approach the refactoring process:

## Step 1: Identify Dependencies
Identify the dependencies between high-level and low-level modules in the existing codebase. Look for places where high-level modules directly depend on concrete implementations of low-level modules.

## Step 2: Introduce Abstractions
Introduce abstractions (interfaces or abstract classes) that define the interactions between high-level and low-level modules. These abstractions should hide the implementation details of the low-level modules from the high-level modules.

## Step 3: Refactor Code to Use Abstractions
Refactor the codebase to use the newly introduced abstractions instead of concrete implementations. Update high-level modules to depend on the abstractions rather than concrete implementations, promoting decoupling and flexibility.

## Refactored Code Example:

```javascript
// ItemInterface.js
class ItemInterface {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

module.exports = ItemInterface;
```

```javascript
// InventoryRepositoryInterface.js
class InventoryRepositoryInterface {
  addItem(item) {
    throw new Error('addItem method must be implemented');
  }

  removeItem(item) {
    throw new Error('removeItem method must be implemented');
  }

  listItems() {
    throw new Error('listItems method must be implemented');
  }
}

module.exports = InventoryRepositoryInterface;
```

```javascript
// InventoryManager.js
class InventoryManager {
  constructor(inventoryRepository) {
    this.inventoryRepository = inventoryRepository;
  }

  addItem(item) {
    this.inventoryRepository.addItem(item);
  }

  removeItem(item) {
    this.inventoryRepository.removeItem(item);
  }

  listItems() {
    return this.inventoryRepository.listItems();
  }
}

module.exports = InventoryManager;
```

```javascript
// InventoryRepository.js
class InventoryRepository extends InventoryRepositoryInterface {
  constructor() {
    super();
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

module.exports = InventoryRepository;
```

## Explanation:

- We've introduced the `ItemInterface` abstraction to define the common properties of all items (e.g., `name`, `price`).
- We've introduced the `InventoryRepositoryInterface` abstraction to define the interactions between the `InventoryManager` and the underlying inventory repository. This abstraction hides the implementation details of the repository from the manager.
- `InventoryManager` now depends on the `InventoryRepositoryInterface` abstraction rather than concrete repository implementations. This promotes decoupling and flexibility, as the manager is no longer tied to specific repository implementations.

By adhering to the Dependency Inversion Principle (DIP) and introducing abstractions to decouple high-level modules from low-level implementation details, we create a more flexible, maintainable, and testable codebase.

Here are unit test examples for the refactored code using only the Node.js built-in `assert` module:

```javascript
// test/ItemInterface.test.js
const assert = require('assert');
const ItemInterface = require('../ItemInterface');

describe('ItemInterface', () => {
  it('should create an item with name and price', () => {
    const item = new ItemInterface('Book', 10);
    assert.strictEqual(item.name, 'Book');
    assert.strictEqual(item.price, 10);
  });
});
```

```javascript
// test/InventoryRepositoryInterface.test.js
const assert = require('assert');
const InventoryRepositoryInterface = require('../InventoryRepositoryInterface');

describe('InventoryRepositoryInterface', () => {
  it('should throw errors for unimplemented methods', () => {
    const inventoryRepository = new InventoryRepositoryInterface();
    assert.throws(() => {
      inventoryRepository.addItem();
    }, Error);
    assert.throws(() => {
      inventoryRepository.removeItem();
    }, Error);
    assert.throws(() => {
      inventoryRepository.listItems();
    }, Error);
  });
});
```

```javascript
// test/InventoryManager.test.js
const assert = require('assert');
const InventoryManager = require('../InventoryManager');
const InventoryRepository = require('../InventoryRepository');

describe('InventoryManager', () => {
  it('should add and remove items from inventory', () => {
    const inventoryRepository = new InventoryRepository();
    const inventoryManager = new InventoryManager(inventoryRepository);

    inventoryManager.addItem({ name: 'Book', price: 10 });
    inventoryManager.addItem({ name: 'CD', price: 15 });

    assert.strictEqual(inventoryManager.listItems().length, 2);

    inventoryManager.removeItem({ name: 'Book', price: 10 });

    assert.strictEqual(inventoryManager.listItems().length, 1);
  });
});
```

These unit tests verify the functionality of the refactored code by testing the behavior of the `ItemInterface`, `InventoryRepositoryInterface`, and `InventoryManager` classes. They use the built-in `assert` module to make assertions about the behavior of the code. You can run these tests using the Node.js test runner.
