const Engineer = require("../lib/Engineer");
describe("Engineer", () => {
  it("to make sure engineer is an objects", () => {
    const engineer = new Engineer();
    expect(typeof engineer).toBe("object");
  });
  it("passes through the name id email and github", () => {
    const engineer = new Engineer(
      "Nazir",
      "24467",
      "adjkdf@gmail.com",
      "https://github.com/MRasheed1991/My_portfolio"
    );
    expect(engineer.name).toBe("Nazir");
    expect(engineer.id).toBe("24467");
    expect(engineer.email).toBe("adjkdf@gmail.com");
    expect(engineer.github).toBe(
      "https://github.com/MRasheed1991/My_portfolio"
    );
  });
  it("calls the get role method correctl", () => {
    const engineer = new Engineer();
    expect(engineer.getRole()).toBe("Engineer");
  });
});
