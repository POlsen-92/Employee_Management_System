const inquirer = require("inquirer");
const db = require('../config/connection');

// DELETE A DEPARTMENT //
function department() {
    return new Promise((resolve, reject) => {
        //Populating list of departments to choose from with Inquirer
        const inqDepartments = depArray.map(department => {
            return {
                name:department.Department,
                value:department.ID
            };
        });
        inquirer.prompt([
            {
                message: "Which Department Do You Want to Delete?",
                type: "list",
                name: "department",
                choices: inqDepartments,
            }
        ]).then(({ department }) => {
            const query = `DELETE FROM department WHERE department.id = ?`
            
            db.query(query, department, (err,data) => {
                if(err){
                    console.log("you messed up");
                    console.log(err)
                    reject(err)
                }
                resolve(console.log("You Did it!"));
            });
        });
    });
};

// DELETE A JOB/ROLE //
function role() {
    return new Promise((resolve, reject) => {
        //Populating list of jobs to choose from with Inquirer
        const inqJobs = jobArray.map(role => {
            return {
                name:role.Title,
                value:role.ID
            };
        });
        inquirer.prompt([
            {
                message: "Which Role Do You Want to Delete?",
                type: "list",
                name: "role",
                choices: inqJobs,
            }
        ]).then(({ role }) => {
            const query = `DELETE FROM role WHERE role.id = ?`
            
            db.query(query, role, (err,data) => {
                if(err){
                    console.log("you messed up");
                    console.log(err)
                    reject(err)
                }
                resolve(console.table("You Did it!"));
            });
        });
    });
};

// DELETE AN EMPLOYEE //
function employee() {
    return new Promise((resolve, reject) => {
        //Populating list of employees to choose from with Inquirer
        const inqEmployees = empArray.map(employee => {
            return {
                name:employee.Name,
                value:employee.ID
            };
        });
        inquirer.prompt([
            {
                message: "Which Employee Do You Want to Delete?",
                type: "list",
                name: "name",
                choices: inqEmployees,
            }
        ]).then(({ name }) => {
            const query = `DELETE FROM employee WHERE employee.id = ?`
            
            db.query(query, name, (err,data) => {
                if(err){
                    console.log("you messed up");
                    console.log(err);
                    reject(err);
                }
                resolve(console.table("You Did it!"));
            });
        });
    });
};

module.exports = { employee, role, department };