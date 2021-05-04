const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");

describe("Engineer Class Tests", () => {
    describe("Initialisation", () => {
        it("Should create an Engineer Sub class of employee with custom instance properties", () => {
            //Arrange
            const id = 1;
            const email = "a.b@email.com";
            const name = "name";
            const github = "octocat";
            const testEngi = new Engineer(id, email, name, github);
            // Act
            const resultId = testEngi.id;
            const resultEmail = testEngi.email;
            const resultName = testEngi.name;
            const resultGit = testEngi.github;
            // Assert

            expect(resultId).toStrictEqual(id);
            expect(resultName).toStrictEqual(name);
            expect(resultEmail).toStrictEqual(email);
            expect(resultGit).toStrictEqual(github);
        });
    });
    describe("getEmail Method", () => {
        it("should return the Email of the current Employee instance", () => {
            //Arrange
            const id = 2;
            const email = "c.d@email.com";
            const name = "testing";
            const github = "octocat";
            const testEngi = new Engineer(id, email, name, github);
            // Act
            const resultEmailMethod = testEngi.getEmail();
            // Assert
            expect(resultEmailMethod).toStrictEqual(email);
        });
        describe("getName Method", () => {
            it("should return the Name of the current Engineer instance", () => {
                //Arrange
                const id = 2;
                const email = "c.d@email.com";
                const name = "testing";
                const github = "octocat";
                const testEngi = new Engineer(id, email, name, github);
                // Act
                const resultNameMethod = testEngi.getName();
                // Assert
                expect(resultNameMethod).toStrictEqual(name);
            });
        });
        describe("getId Method", () => {
            it("should return the Id of the current Engineer instance", () => {
                //Arrange
                const id = 2;
                const email = "c.d@email.com";
                const name = "testing";
                const github = "octocat";
                const testEngi = new Engineer(id, email, name, github);
                // Act
                const resultIdMethod = testEngi.getId();
                // Assert
                expect(resultIdMethod).toStrictEqual(id);
            });
        });
        describe("getGithub Method", () => {
            it("Should return a github url with the Engineer's username eneterd into it", () => {
                // Arrange
                const id = 2;
                const email = "c.d@email.com";
                const name = "testing";
                const github = "octocat";
                const testEngi = new Engineer(id, email, name, github);
                // Act
                const resultIdMethod = testEngi.getGithub();
                const githubUrl = `https://github.com/${github}`;
                // Assert
                expect(resultIdMethod).toStrictEqual(githubUrl);
            });
        });
    });
});
