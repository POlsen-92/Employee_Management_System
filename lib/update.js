const inquirer = require("inquirer");
const db = require('../config/connection');

// UPDATE EMPLOYEE JOB//
function employeeRole(){
    return new Promise((resolve, reject) => {
        //Populating list of employees to choose from with Inquirer
        const inqEmployees = empArray.map(employee => {
            return {
                name:employee.Name,
                value:employee.ID
            };
        });
        //Populating list of jobs to choose from with Inquirer
        const inqJobs = jobArray.map(role => {
            return {
                name:role.Title,
                value:role.ID
            };
        });
        inquirer.prompt([
            {
                message: "Which Employee Do You Want to Update?",
                type: "list",
                name: "name",
                choices: inqEmployees,
            }, {
                message: "What Job do You Want this Employee to Have?",
                type: "list",
                name: "job",
                choices: inqJobs
            }
        ]).then((answers) => {
            const query = `UPDATE employee SET role_id = (?) WHERE employee.id = (?)`
            
            db.query(query, [`${answers.job}`, `${answers.name}`], (err,data) => {
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
    
// //UPDATE EMPLOYEE MANAGER
function employeeManager(){
    return new Promise((resolve, reject) => {
        //Populating list of employees to choose from with Inquirer without the option of none
        const inqEmployees1 = empArray.map(employee => {
            return {
                name:employee.Name,
                value:employee.ID
            }
        })
        //Populating list of employees to choose from with Inquirer with the option of none
        const inqEmployees2 = empArray.map(employee => {
            return {
                name:employee.Name,
                value:employee.ID
            }
        })
        inqEmployees2.push("None");
        inquirer.prompt([
            {
                message: "Which Employee Do You Want to Update?",
                type: "list",
                name: "name",
                choices: inqEmployees1,
            },{
                message: "Which Employee Should Be Their Manager?",
                type: "list",
                name: "manager",
                choices: inqEmployees2
            }
        ]).then((answers) => {
            const query = `UPDATE employee SET manager_id = (?) WHERE employee.id = (?)`
            //this allows the manager choice to be set to null if none is chosen
            if(answers.manager =="None") {
                answers.manager = 0;
            }
            db.query(query, [`${answers.manager}`, `${answers.name}`], (err,data) => {
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



module.exports = { employeeRole, employeeManager };