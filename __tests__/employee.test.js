const Employee = require("../lib/employee");

describe("Employee Class", () => {
    describe("Initialisation", () => {
        it("should return a Employee instance with custom properties", () => {
            // Arrange
            const id = 1;
            const email = "a.b@email.com";
            const name = "ab";
            const testEmp = new Employee(id, email, name);
            //Act
            const resultId = testEmp.id;
            const resultEmail = testEmp.email;
            const resultName = testEmp.name;
            // Assert
            expect(resultId).toStrictEqual(id);
            expect(resultEmail).toStrictEqual(email);
            expect(resultName).toStrictEqual(name);
        });
    });
    describe("getEmail Method", () => {
        it("should return the Email of the current Employee instance", () => {
            //Arrange
            const id = 2;
            const email = "c.d@email.com";
            const name = "testing";
            const testEmp = new Employee(id, email, name);
            // Act
            const resultEmailMethod = testEmp.getEmail();
            // Assert
            expect(resultEmailMethod).toStrictEqual(email);
        });
        describe("getName Method", () => {
            it("should return the Name of the current Employee instance", () => {
                //Arrange
                const id = 2;
                const email = "c.d@email.com";
                const name = "testing";
                const testEmp = new Employee(id, email, name);
                // Act
                const resultNameMethod = testEmp.getName();
                // Assert
                expect(resultNameMethod).toStrictEqual(name);
            });
        });
        describe("getId Method", () => {
            it("should return the Id of the current Employee instance", () => {
                //Arrange
                const id = 2;
                const email = "c.d@email.com";
                const name = "testing";
                const testEmp = new Employee(id, email, name);
                // Act
                const resultIdMethod = testEmp.getId();
                // Assert
                expect(resultIdMethod).toStrictEqual(id);
            });
        });
    });
});
