# Evolution of an Inventory Management System

## [Session 1: Introduction to Test Driven Development (TDD)](session-1-tdd/README.md)

**Objective:** 
- Introduce participants to the principles and workflow of Test Driven Development (TDD).
- Start building the foundation of the inventory management system using TDD practices.

**Agenda:**
1. Introduction to TDD: Explanation of TDD principles and workflow.
2. Setting up the Environment: Establishing the development environment and testing framework.
3. Writing Test Cases: Identifying test scenarios and writing test cases for basic inventory management functionalities (e.g., adding books, listing books).
4. Implementing Code: Writing code to make the failing test cases pass while adhering to TDD practices.
5. Review and Refactor: Reviewing the implemented code, refactoring if necessary, and discussing lessons learned.

**Key Takeaways:**
- Understanding the importance of writing tests before writing code.
- Practicing iterative development and continuous improvement through TDD.
- Gaining familiarity with writing effective test cases and implementing code to pass those tests.

## [Session 2: Single Responsibility Principle (SRP)](session-2-srp/README.md)

**Objective:**
- Explore the Single Responsibility Principle (SRP) and its significance in software design.
- Refactor the existing codebase to adhere to SRP by separating concerns.

**Agenda:**
1. Understanding SRP: Explanation of SRP and its implications for software design.
2. Identifying Responsibilities: Analyzing the existing codebase to identify areas of responsibility.
3. Refactoring Code: Refactoring the code to separate responsibilities for adding books, removing books, and listing books into distinct modules or classes.
4. Testing Refactored Code: Writing additional tests and verifying that the refactored code behaves as expected.
5. Review and Discussion: Reviewing the refactored code, discussing challenges faced during refactoring, and sharing insights on designing classes with single responsibilities.

**Key Takeaways:**
- Recognizing the importance of designing classes with clear and focused responsibilities.
- Learning techniques for refactoring code to adhere to SRP without altering functionality.
- Gaining insights into identifying and defining responsibilities within a codebase.

## [Session 3: Open/Closed Principle (OCP)](session-3-ocp/README.md)

**Objective:**
- Introduce the Open/Closed Principle (OCP) and its role in creating flexible and extensible software systems.
- Modify the program to allow for the addition of new features without modifying existing code.

**Agenda:**
1. Introduction to OCP: Explanation of OCP and its benefits for software design.
2. Modifying the Program: Identifying areas of the codebase that can be extended without modification.
3. Implementing Extension Points: Adding mechanisms to the program to allow for the addition of new book genres or features.
4. Testing Extension Points: Writing tests to ensure that the program remains functional after adding new features.
5. Review and Discussion: Reviewing the modified code, discussing the application of OCP, and sharing experiences with designing extensible systems.

**Key Takeaways:**
- Understanding the importance of designing software to be open for extension but closed for modification.
- Learning techniques for identifying and implementing extension points within a codebase.
- Exploring strategies for designing flexible and extensible software architectures.

## [Session 4: Liskov's Substitution Principle (LSP)](session-4-lsp/README.md)

**Objective:**
- Introduce Liskov's Substitution Principle (LSP) and its implications for object-oriented design.
- Refactor the program to ensure that derived classes can be substituted for their base classes without altering the correctness of the program.

**Agenda:**
1. Understanding LSP: Explanation of LSP and its role in designing class hierarchies.
2. Analyzing Class Hierarchies: Analyzing the existing class hierarchies within the program.
3. Ensuring Substitutability: Refactoring the code to ensure that derived classes can be substituted for their base classes without altering behavior.
4. Writing Tests: Writing tests to verify that substitutability has been maintained.
5. Review and Discussion: Reviewing the refactored code, discussing challenges faced during refactoring, and sharing insights on designing class hierarchies that adhere to LSP.

**Key Takeaways:**
- Understanding the importance of designing class hierarchies that support substitutability.
- Learning techniques for refactoring code to adhere to LSP without introducing bugs.
- Gaining insights into designing flexible and maintainable class hierarchies.

## [Session 5: Interface Segregation Principle (ISP)](session-5-isp/README.md)

**Objective:**
- Introduce the Interface Segregation Principle (ISP) and its role in designing cohesive interfaces.
- Refactor the program to adhere to ISP by separating large interfaces into smaller, more focused ones.

**Agenda:**
1. Introduction to ISP: Explanation of ISP and its benefits for designing interfaces.
2. Analyzing Existing Interfaces: Identifying interfaces within the program that violate ISP.
3. Refactoring Interfaces: Refactoring the interfaces to be more focused and cohesive, adhering to ISP.
4. Implementing Interface Segregation: Modifying classes to implement the newly defined interfaces.
5. Review and Discussion: Reviewing the refactored code, discussing the application of ISP, and sharing experiences with designing modular interfaces.

**Key Takeaways:**
- Understanding the importance of designing interfaces that are focused and cohesive.
- Learning techniques for refactoring interfaces to adhere to ISP without breaking existing code.
- Exploring strategies for designing modular and maintainable interfaces.

## [Session 6: Dependency Inversion Principle (DIP)](session-6-dip/README.md)

**Objective:**
- Introduce the Dependency Inversion Principle (DIP) and its benefits for creating flexible and maintainable software systems.
- Refactor the program to decouple high-level modules from low-level dependencies.

**Agenda:**
1. Introduction to DIP: Explanation of DIP and its significance for software design.
2. Analyzing Dependencies: Identifying dependencies within the program that violate DIP.
3. Implementing Dependency Injection: Refactoring the code to implement dependency injection and decouple high-level modules from low-level dependencies.
4. Testing Decoupled Code: Writing tests to verify that the program remains functional after implementing dependency injection.
5. Review and Discussion: Reviewing the refactored code, discussing the application of DIP, and sharing experiences with designing loosely coupled software components.

**Key Takeaways:**
- Understanding the importance of designing software components with loosely coupled dependencies.
- Learning techniques for implementing dependency injection to adhere to DIP principles.
- Exploring strategies for designing flexible and maintainable software architectures.

Throughout the series, participants will gain practical experience in applying fundamental principles of software design to a real-world project. They'll also have opportunities to collaborate, share insights, and learn from each other's experiences, fostering a supportive and inclusive learning environment.

## Requirement evolution to augment each sessions b-plot

Here's the initial business requirements and each adaptation in a set of evolving requirements for the Basic Inventory Management System that prompt the adaptation of each principle:

### Initial Business Requirements:
1. **Addition, Removal, and Listing of Items**:
   - **Description**: The system should allow employees to add new items to the inventory, remove existing items when necessary, and list all items currently available in the inventory.
   - **User Story**: As a warehouse employee, I want to be able to add new items to our inventory, remove items that are no longer in stock, and quickly view a list of all available items.

### Adaptation for Single Responsibility Principle (SRP):
2. **Inventory Reporting and Low Inventory Notifications**:
   - **Description**: The system should provide automated reporting on inventory levels and send notifications to warehouse managers when inventory levels fall below a predefined threshold.
   - **User Story**: As a warehouse manager, I want to receive regular reports on inventory levels to ensure adequate stock levels are maintained. Additionally, I want to be notified immediately when inventory levels for certain items are critically low so that I can take appropriate action.
   - **Initial Requirement**: The system should allow users to add, remove, and list items in the inventory.
   - **Adaptation Requirement**: The system should now also generate reports on inventory levels and notify users when inventory levels are low.

### Adaptation for Open/Closed Principle (OCP):
3. **Support for New Item Types**:
   - **Description**: The system should support the addition of new types of items to the inventory without requiring modifications to existing code. New item types may include electronics, furniture, or perishable goods.
   - **User Story**: As a product manager, I want to be able to introduce new types of items to our inventory without disrupting existing functionality. This will allow us to expand our product offerings and adapt to changing market demands more effectively.
   - **Initial Requirement**: The system allows users to add, remove, and list items using specific methods in the `InventoryManager` class.
   - **Adaptation Requirement**: The system should now support adding new types of items, such as electronics or furniture, without modifying existing code in the `InventoryManager` class.

### Adaptation for Liskov Substitution Principle (LSP):
4. **Seamless Integration of Variant Items**:
   - **Description**: The system should ensure that variant types of items, such as different editions of books or variations of electronic devices, can be seamlessly integrated into the inventory without impacting the overall functionality.
   - **User Story**: As a customer service representative, I want to be confident that I can add new editions of books or different models of electronic devices to our inventory without encountering any compatibility issues. This will ensure a smooth customer experience and prevent disruptions to our operations.
   - **Initial Requirement**: The system allows users to add and remove items from the inventory.
   - **Adaptation Requirement**: The system should now ensure that any derived types of items (e.g., different variants of books or CDs) can be seamlessly substituted for the base type (e.g., `Item`) without affecting the behavior of the system.

### Adaptation for Interface Segregation Principle (ISP):
5. **Refined Interfaces for Item Management**:
   - **Description**: The system should provide separate interfaces for adding, removing, and listing items in the inventory to ensure that clients only depend on the methods they use, promoting better code organization and reducing unnecessary dependencies.
   - **User Story**: As a software developer, I want to work with interfaces that are focused on specific tasks, such as adding, removing, or listing items, rather than having to implement unnecessary methods. This will make the codebase cleaner, more maintainable, and easier to understand.
   - **Initial Requirement**: The system provides a single interface (`InventoryRepositoryInterface`) for adding, removing, and listing items in the inventory.
   - **Adaptation Requirement**: The system should now separate the interfaces for adding, removing, and listing items to ensure that clients only depend on the methods they use, rather than implementing unnecessary methods.

### Adaptation for Dependency Inversion Principle (DIP):
6. **Abstraction of Low-Level Inventory Operations**:
   - **Description**: The system should introduce abstractions, such as interfaces, to decouple high-level modules from low-level implementation details related to inventory operations. This will promote flexibility, maintainability, and testability in the codebase.
   - **User Story**: As a software architect, I want to refactor the inventory management system to use abstractions for interacting with the underlying data storage mechanisms. By doing so, we can ensure that high-level modules are not tightly coupled to specific database implementations, making it easier to switch between different storage solutions in the future.
   - **Initial Requirement**: The system depends directly on concrete implementations of low-level modules, such as the `InventoryRepository` class.
   - **Adaptation Requirement**: The system should now introduce abstractions (e.g., interfaces) to decouple high-level modules (e.g., `InventoryManager`) from low-level implementation details, promoting flexibility and maintainability.

These business requirements and evolving adaptations mimic real-world scenarios commonly encountered in software development projects. They highlight the iterative nature of software design and the importance of adhering to SOLID principles to ensure a robust, maintainable, and scalable system.
