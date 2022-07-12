const generateHtml= function (teamstr){
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
            <h1>My Team</h1>
    
        <div class="body">
     
    <div class="card">
     <div class="card-header">
         <h2></h2>  
         <h2>Manager</h2>
         <hr>
     </div>
    
     <div class="card-body">
         <ul>
             <li>ID:</li>
             <li>Email:</li>
             <li>Office Number:</li>
         </ul>
     </div>
     </div>
     
     <div class="card">
     <div class="card-header">
         <h2></h2>  
         <h2>Engineer</h2>
         <hr>
     </div>
    
     <div class="card-body">
         <ul>
             <li>ID:</li>
             <li>Email:</li>
             <li>Github Username:</li>
         </ul>
     </div>
    
     </div><div class="card">
     <div class="card-header">
         <h2></h2>  
         <h2>Intern</h2>
         <hr>
     </div>
    
     <div class="card-body">
         <ul>
             <li>ID:</li>
             <li>Email:</li>
             <li>School:</li>
         </ul>
     </div>
     </div> 
     
        </div>
    
    </div> 
    
    </body>
    
    </html>`
}

//generate the card emp = employee object

const generateCard = function(emp) {
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
<h2>${emp.title}</h2>
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
exports.genrateCard = generateCard; 

