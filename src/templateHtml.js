 const generateHtml = function(teamstr){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile Generator</title>
    
        </head>
    
    <body>
   <div class=header>
       <h1>My Team</h1>
   </div>
   <div class="container-body">
         ${teamstr} 
    </body>
    
    </html>`
}

//generate the card emp = employee object

 const generateCard = function(emp){
    //if else statement
    let roleInfo;

    if (emp.title === "Manager") {
        roleInfo = `Office Number: ${emp.officeNumber}`
    } else if (emp.title === "Engineer") {
        roleInfo = `Github Username: ${emp.github}`
    } else if (emp.title === "Intern") {
        roleInfo = `School: ${emp.school}`
    }

    return `<div class="card">
<div class="card-header">
<h2>${emp.name}</h2>  
<h2>${emp.role}</h2>
<hr>
</div>
<div class="card-body">
<ul>
    <li>ID: ${emp.id}</li>
    <li>Email: ${emp.email}</li>
    <li>${roleInfo} </li>
</ul>
</div>
</div>`
}

exports.generateHtml = generateHtml; 
exports.generateCard = generateCard; 
