const intern = require("../lib/Intern"); 

  it("Output school with getSchool", () => {
    const value = "UGA"; 
    const employee = new intern ("Ortal", 1, "owikoff@gmail.com", "UGA"); 
    expect(employee.getSchool()).toBe(value); 
}); 

