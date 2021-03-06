const Manager = require('../lib/Manager');

test("Test to see if Manager instance is being passed as object", () => {
    const man = new Manager();
    expect(typeof(man)).toBe("object");
})

test("Test GitHub username input on Engineer", () => {
    const officetest = "12B";
    const o = new Manager("role", "name", "id", "email", officetest);
    expect(o.officeNumber).toBe(officetest);
})