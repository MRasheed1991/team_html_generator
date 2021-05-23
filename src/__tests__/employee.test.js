const Employee = require("../lib/Employee");
describe("Employee", () => {
  it("to make sure employee is an objects", () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
  });
  it("passes through the name id and email", () => {
    const employee = new Employee("Nazim", "34467", "jdjkdf@gmail.com");
    expect(employee.name).toBe("Nazim");
    expect(employee.id).toBe("34467");
    expect(employee.email).toBe("jdjkdf@gmail.com");
  });
  it("calls the get role method correctl", () => {
    const employee = new Employee();
    expect(employee.getRole()).toBe("Employee");
  });
});
