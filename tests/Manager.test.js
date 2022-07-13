const manager = require("../lib/Manager");

  it("Output office number with getOffice", () => {
      const value = 949; 
      const employee = new manager ("Ortal", 1, "owikoff@gmail.com", 949); 
      expect(employee.getOfficeNumber()).toBe(value); 
  }); 
 