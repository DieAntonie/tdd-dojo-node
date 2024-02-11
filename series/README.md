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
