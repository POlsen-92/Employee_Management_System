const inquirer = require("inquirer");
const cTable = require('console.table');
const view = require('./lib/view');
const add = require ('./lib/add');
const array = require ('./lib/arrays');
const update = require ('./lib/update');
const del = require ('./lib/delete');

const startCompany = async () => {
    console.log('Welcome to Our Company!')

    let depArray = await array.getDepArray()
    let jobArray = await array.getJobArray()
    let empArray = await array.getEmpArray()

    inquirer.prompt({
        message: "What Do You Want To Do?",
        type: "list",
        name: "question",
        choices:['View All Departments','View All Jobs','View All Employees','View Employees by Manager','View Employees by Department','Add a Department','Add a Role','Add an Employee','Update an Employee Role',"Update an Employee's Manager","Delete a Department","Delete a Role","Delete an Employee","Quit"]
    }).then(async (answers) => {
        switch (answers.question) {
            case "View All Departments": 
                console.log("Viewing All Departments");
                await view.departments();
                return startCompany();
            case "View All Jobs": 
                console.log("Viewing All Jobs");
                await view.jobs();
                return startCompany();
            case "View All Employees": 
                console.log("Viewing All Employees");
                await view.employees();
                return startCompany();
            case "View Employees by Manager": 
                console.log("Viewing Employees by Manager");
                await view.manEmployees();
                return startCompany();
            case "View Employees by Department": 
                console.log("Viewing Employees by Department");
                await view.depEmployees();
                return startCompany();
            case "Add a Department": 
                console.log("Adding a Department");
                await add.department()
                return startCompany();
            case "Add a Role": 
                console.log("Adding a Role");
                await add.role()
                return startCompany();
            case "Add an Employee": 
                console.log("Adding an Employee");
                await add.employee()
                return startCompany();
            case "Update an Employee Role": 
                console.log("Updating an Employee");
                await update.employeeRole()
                return startCompany();
            case "Update an Employee's Manager": 
                console.log("Updating an Employee");
                await update.employeeManager()
                return startCompany();
            case "Delete a Department":
                console.log("Deleting a Department");
                await del.department()
                return startCompany();
            case "Delete a Role":
                console.log("Deleting a Role");
                await del.role()
                return startCompany();
            case "Delete an Employee":
                console.log("Deleting an Employee");
                await del.employee()
                return startCompany();
            default:
                console.log('GoodBye!');
        };
    });
};

startCompany();
