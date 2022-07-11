const generateHtml = function (team) {
    return `
    <!DOCTYPE html>
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

    ${team} 


</body>

</html>
    `
}

//generate the card employee = employee object

const generateCard = function (employee) {
    //if else statement
    let roleTheInfo;

    if (employee.title === "Manager") {
        roleTheInfo = `Office Number: ${employee.officeNumber}`
    } else if (employee.title === "Engineer") {
        roleTheInfo = `Github Username: ${employee.github}`
    } else if (employee.title === "Intern") {
        roleTheInfo = `School: ${employee.school}`
    }

    return `<div class="card">
<div class="card-header">
<h2>${employee.name}</h2>  
<h2> ${employee.title}</h2>
<hr>
</div>
<div class="card-body">
<ul>
    <li>ID: ${employee.id}</li>
    <li>Email: ${employee.email}</li>
    <li>${roleTheInfo}</li>
</ul>
</div>
</div>`
}

exports.generateHtml = generateHtml
