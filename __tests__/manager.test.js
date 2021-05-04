const Manager = require("../lib/manager");

describe("Manager Class Tests", () => {
    describe("Initialisation", () => {
        it("Should create an instance of the manager class and assign it custom properties", () => {});
        const id = 1;
        const email = "a.b@email.com";
        const name = "name";
        const officeNumber = 1;
        const testManager = new Manager(id, email, name, officeNumber);
        // Act
        const resultId = testManager.id;
        const resultEmail = testManager.email;
        const resultName = testManager.name;
        const resultOfficeNumber = testManager.officeNumber;
        // Assert

        expect(resultId).toStrictEqual(id);
        expect(resultName).toStrictEqual(name);
        expect(resultEmail).toStrictEqual(email);
        expect(resultOfficeNumber).toStrictEqual(officeNumber);
    });
    describe("Manager Class Methods", () => {
        describe("getEmail Method", () => {
            it("should return the Email of the current Employee instance", () => {
                //Arrange
                const id = 2;
                const email = "e.g@email.com";
                const name = "testing";
                const officeNumber = 1;
                const testManager = new Manager(id, email, name, officeNumber);
                // Act
                const resultEmailMethod = testManager.getEmail();
                // Assert
                expect(resultEmailMethod).toStrictEqual(email);
            });
            describe("getName Method", () => {
                it("should return the Name of the current Manager instance", () => {
                    //Arrange
                    const id = 2;
                    const email = "e.g@email.com";
                    const name = "testing";
                    const officeNumber = 1;
                    const testManager = new Manager(
                        id,
                        email,
                        name,
                        officeNumber
                    );
                    // Act
                    const resultNameMethod = testManager.getName();
                    // Assert
                    expect(resultNameMethod).toStrictEqual(name);
                });
            });
            describe("getId Method", () => {
                it("should return the Id of the current Manager instance", () => {
                    //Arrange
                    const id = 2;
                    const email = "e.g@email.com";
                    const name = "testing";
                    const officeNumber = 1;
                    const testManager = new Manager(
                        id,
                        email,
                        name,
                        officeNumber
                    );
                    // Act
                    const resultIdMethod = testManager.getId();
                    // Assert
                    expect(resultIdMethod).toStrictEqual(id);
                });
            });
            describe("getRole Method", () => {
                it("Should return the instance of manager class it is called on", () => {
                    //Arrange
                    const id = 2;
                    const email = "e.g@email.com";
                    const name = "testing";
                    const officeNumber = 1;
                    const testManager = new Manager(
                        id,
                        email,
                        name,
                        officeNumber
                    );
                    // Act
                    const getRoleResult = testManager.getRole();
                    // Assert
                    expect(getRoleResult).toEqual(testManager);
                });
            });
        });
    });
});
