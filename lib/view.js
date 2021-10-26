const inquirer = require("inquirer");
const db = require('../config/connection');

function departments(){
    return new Promise((resolve, reject) => {
        const query = `SELECT department.id 'ID', department.name 'Department'FROM department`

        db.query(query, (err,data) => {
            if(err){
                console.log("you messed up");
                reject(err)
            }
            resolve(console.table(data));
        });
    })
};

function jobs() {
    return new Promise((resolve, reject) => {
        const query = `SELECT role.id 'ID',role.title 'Job Title',department.name 'Department',role.salary 'Salary' FROM department JOIN role ON department.id=role.department_id`

        db.query(query, (err,data) => {
            if(err){
                console.log("you messed up");
                reject(err)
            }
            resolve(console.table(data));
        });
    })
};

function employees() {
    return new Promise((resolve, reject) => {
        const query = `SELECT employee.id 'ID', employee.first_name 'First Name', employee.last_name 'Last Name', role.title 'Job',department.name 'Department',role.salary 'Salary', CONCAT_WS(' ', m.first_name, m.last_name) 'Manager' FROM department JOIN role ON department.id=role.department_id JOIN employee ON role.id=employee.role_id LEFT JOIN employee AS m ON m.id = employee.manager_id`

        db.query(query, (err,data) => {
            if(err){
                console.log("you messed up");
                reject(err)
            }
            resolve(console.table(data));
        });
    })
};

//  VIEW EMPLOYEES BY MANAGER
function manEmployees() {
    return new Promise((resolve, reject) => {
        //Populating list of employees to choose from with Inquirer
        const inqEmployees = empArray.map(employee => {
            return {
                name:employee.Name,
                value:employee.ID
            }
        })
        //Pushes the choice None so that employees with no manager can be seen
        inqEmployees.push("None");
        inquirer.prompt(
            {
                message: "What is the name of the Manager whose employees you want to see?",
                type: "list",
                name: "manager",
                choices: inqEmployees
        }).then((answers) => {
            const query = `SELECT employee.id 'ID', CONCAT_WS(' ', employee.first_name, employee.last_name) 'Name', role.title 'Job',department.name 'Department',role.salary 'Salary',CONCAT_WS(' ', m.first_name, m.last_name) 'Manager'FROM department JOIN role ON department.id=role.department_id JOIN employee ON role.id=employee.role_id LEFT JOIN employee AS m ON m.id = employee.manager_id WHERE employee.manager_id = ?`
            //this allows the manager choice to be set to null if none is chosen
            if(answers.manager =="None") {
                answers.manager = 0;
            }

            db.query(query, answers.manager, (err,data) => {
                if(err){
                    console.log("you messed up");
                    console.log(err)
                    reject(err)
                }
                console.log('You did it!');
                resolve(console.table(data))
            });
        });
    })
};

// //VIEW EMPLOYEES BY DEPARTMENT
function depEmployees() {
    return new Promise((resolve, reject) => {
        //Populating list of departments to choose from with Inquirer
        const inqDepartments = depArray.map(department => {
            return {
                name:department.Department,
                value:department.ID
            }
        })
        inquirer.prompt(
            {
                message: "What is the name of the Department whose employees you want to see?",
                type: "list",
                name: "department",
                choices: inqDepartments
        }).then((answers) => {
            const query = `SELECT employee.id 'ID', CONCAT_WS(' ', employee.first_name, employee.last_name) 'Name', role.title 'Job',department.name 'Department',role.salary 'Salary',CONCAT_WS(' ', m.first_name, m.last_name) 'Manager'FROM department JOIN role ON department.id=role.department_id JOIN employee ON role.id=employee.role_id LEFT JOIN employee AS m ON m.id = employee.manager_id WHERE role.department_id = ?`
            
            db.query(query, answers.department, (err,data) => {
                if(err){
                    console.log("you messed up");
                    console.log(err)
                    reject(err)
                }
                console.log('You did it!');
                resolve(console.table(data));
            });
        });
    })
};
         

module.exports = { departments, jobs, employees, manEmployees, depEmployees };