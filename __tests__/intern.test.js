const Intern = require("../lib/intern");

describe("Intern Class Test", () => {
    describe("Class Initialisation", () => {
        it("Should create a instance of intern with custom instance properties", () => {
            // Arrange
            const id = 1;
            const email = "a.b@email.com";
            const name = "name";
            const school = "school";
            const testIntern = new Intern(id, email, name, school);
            // Act
            const resultId = testIntern.id;
            const resultEmail = testIntern.email;
            const resultName = testIntern.name;
            const resultSchool = testIntern.school;

            //Assert
            expect(resultId).toStrictEqual(id);
            expect(resultName).toStrictEqual(name);
            expect(resultEmail).toStrictEqual(email);
            expect(resultSchool).toStrictEqual(school);
        });
    });
    describe("Intern Class Methods", () => {
        describe("getEmail Method", () => {
            it("should return the Email of the current Employee instance", () => {
                //Arrange
                const id = 2;
                const email = "e.g@email.com";
                const name = "testing";
                const school = "school";
                const testIntern = new Intern(id, email, name, school);
                // Act
                const resultEmailMethod = testIntern.getEmail();
                // Assert
                expect(resultEmailMethod).toStrictEqual(email);
            });
            describe("getName Method", () => {
                it("should return the Name of the current Intern instance", () => {
                    //Arrange
                    const id = 2;
                    const email = "e.g@email.com";
                    const name = "testing";
                    const school = "school";
                    const testIntern = new Intern(id, email, name, school);
                    // Act
                    const resultNameMethod = testIntern.getName();
                    // Assert
                    expect(resultNameMethod).toStrictEqual(name);
                });
            });
            describe("getId Method", () => {
                it("should return the Id of the current Intern instance", () => {
                    //Arrange
                    const id = 2;
                    const email = "e.g@email.com";
                    const name = "testing";
                    const school = "school";
                    const testIntern = new Intern(id, email, name, school);
                    // Act
                    const resultIdMethod = testIntern.getId();
                    // Assert
                    expect(resultIdMethod).toStrictEqual(id);
                });
            });
            describe("getSchool Method", () => {
                it("should return the name of the school as a string", () => {
                    //Arrange
                    const id = 2;
                    const email = "e.g@email.com";
                    const name = "testing";
                    const school = "school";
                    const testIntern = new Intern(id, email, name, school);
                    //Act
                    const resultSchoolMethod = testIntern.getSchool();
                    //Assert
                    expect(resultSchoolMethod).toStrictEqual(school);
                });
            });
            describe("getRole Method", () => {
                it("should return the instance of the Intern class that it is called on", () => {
                    //Arrange
                    const id = 2;
                    const email = "e.g@email.com";
                    const name = "testing";
                    const school = "school";
                    const testIntern = new Intern(id, email, name, school);
                    //Act
                    const resultGetRole = testIntern.getRole();
                    //Assert
                    expect(resultGetRole).toEqual(testIntern);
                });
            });
        });
    });
});
