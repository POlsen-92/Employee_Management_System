const inquirer = require("inquirer");
const db = require('../config/connection');

function department(){
    return new Promise((resolve, reject) => {
        inquirer.prompt({
            message: "What is the Name of the New Department?",
            type: "input",
            name: "name",
        }).then(({ name }) => {
            const query = `INSERT INTO department (name) VALUES (?)`

            db.query(query, name, (err,data) => {
                if(err){ 
                    console.log("you messed up");
                    reject(err)
                }
                resolve(console.log("You Did It!"));
            });
        })
    })
}

// ADD JOB //
function role(){
    return new Promise((resolve, reject) => {
        const inqDepartments = depArray.map(department => {
            return {
                name:department.Department,
                value:department.ID
            }
        })
        inquirer.prompt([
            {
                message: "What is the Name of the New Job?",
                type: "input",
                name: "name",
            }, {
                message: "What is the Salary of the New Job?",
                type: "input",
                name: "salary",
            }, {
                message: "What is the Department of the New Job?",
                type: "list",
                name: "department",
                choices: inqDepartments,
            }
        ]).then((answers) => {
            const query = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`
            
            db.query(query, [`${answers.name}`, `${answers.salary}`, `${answers.department}`], (err,data) => {
                if(err){
                    console.log("you messed up");
                    reject(err);
                } else {
                    resolve(console.log("You Did It!"));
                }
            });
        })
    })
}


// // ADD EMPLOYEE
function employee(){
    return new Promise((resolve, reject) => {
        const inqJobs = jobArray.map(role => {
            return {
                name:role.Title,
                value:role.ID
            }
        })
        const inqEmployees = empArray.map(employee => {
            return {
                name:employee.Name,
                value:employee.ID
            }
        })
        inqEmployees.push("None");
        
        inquirer.prompt([
            {
                message: "What is the First Name of the New Employee?",
                type: "input",
                name: "firstName",
            },{
                message: "What is the Last Name of the New Employee?",
                type: "input",
                name: "lastName",
            },{
                message: "What is the Job of the New Employee?",
                type: "list",
                name: "role",
                choices: inqJobs,
            },{   
                message: "Who is the Manager of the New Employee?",
                type: "list",
                name: "manager",
                choices: inqEmployees
            }
        ]).then((answers) => {
            const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`
            if(answers.manager =="None") {
                answers.manager = 0;
            }
            db.query(query, [`${answers.firstName}`, `${answers.lastName}`, `${answers.role}`,`${answers.manager}`], (err,data) => {
                if(err){
                    console.log("You Messed Up")
                    console.log(err);
                    reject(err)
                } else {
                    resolve(console.log("You Did It!"));
                }
            });
        })
    })
}



module.exports = { department, role, employee };