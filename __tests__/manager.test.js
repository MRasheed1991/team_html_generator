const Manager = require("../lib/Manager");
describe("Manager", () => {
  it("to make sure manager is an objects", () => {
    const manager = new Manager();
    expect(typeof manager).toBe("object");
  });
  it("passes through the name id and email", () => {
    const manager = new Manager(
      "Nazim",
      "34467",
      "jdjkdf@gmail.com",
      "officeNumber"
    );
    expect(manager.name).toBe("Nazim");
    expect(manager.id).toBe("34467");
    expect(manager.email).toBe("jdjkdf@gmail.com");
    expect(manager.officeNumber).toBe("officeNumber");
  });
  it("calls the get role method correctl", () => {
    const manager = new Manager();
    expect(manager.getRole()).toBe("Manager");
  });
});
