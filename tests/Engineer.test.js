const engineer = require ("../lib/Engineer")

  it("Output GitHub with getGithub", () => {
    const value = "GitHubUser"; 
    const employee = new engineer ("Ortal", 1, "owikoff@gmail.com", "GitHubUser"); 
    expect(employee.getGithub()).toBe(value); 
}); 