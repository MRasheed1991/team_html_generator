const Intern = require("../lib/Intern");
describe("Intern", () => {
  it("to make sure intern is an objects", () => {
    const intern = new Intern();
    expect(typeof intern).toBe("object");
  });
  it("passes through the name id and email", () => {
    const intern = new Intern(
      "Nazi",
      "14467",
      "bdjkdf@gmail.com",
      "Birmingham-uni"
    );
    expect(intern.name).toBe("Nazi");
    expect(intern.id).toBe("14467");
    expect(intern.email).toBe("bdjkdf@gmail.com");
    expect(intern.school).toBe("Birmingham-uni");
  });
  it("calls the get role method correctl", () => {
    const intern = new Intern();
    expect(intern.getRole()).toBe("Intern");
  });
});
