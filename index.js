const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require('console.table');
const db = require('./config/connection');
const { viewDepartments, viewJobs, viewEmployees, viewManagers, viewRegEmployees } = require('./lib/view');
const { addDepartment, addRole, addEmployee } = require ('./lib/add');
const { updateEmployee } = require ('./lib/update');
// const { deleteEmployee, deleteRole, deleteDepartment } = require ('./lib/delete');
// const { budgetDepartment, budgetCompany } = require ('./lib/budget');

const startCompany = () => {
    console.log('Welcome to Our Company!')

    inquirer.prompt({
        message: "What Do You Want To Do?",
        type: "list",
        name: "question",
        choices:['View All Departments', 'View All Jobs', 'View All Employees', 'View All Managers', 'View All Non-Manager Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee',"Quit"]
    }).then(async (answers) => {
        switch (answers.question) {
            case "View All Departments":
                console.log("Viewing All Departments");
                await viewDepartments();
                return startCompany();
            case "View All Jobs":
                console.log("Viewing All Jobs");
                await viewJobs();
                return startCompany();
            case "View All Employees":
                console.log("Viewing All Employees");
                await viewEmployees();
                return startCompany();
            case "View All Managers":
                console.log("Viewing Managers");
                await viewManagers()
                return startCompany();
            case "View All Non-Manager Employees":
                console.log("Viewing Non-Manager Employees");
                await viewRegEmployees()
                return startCompany();
            case "Add a Department":
                console.log("Adding a Department");
                await addDepartment()
                return startCompany();
            case "Add a Role":
                console.log("Adding a Role");
                await addRole()
                return startCompany();
            case "Add an Employee":
                console.log("Adding an Employee");
                await addEmployee()
                return startCompany();
            case "Update an Employee":
                console.log("Updating an Employee");
                await updateEmployee()
                return startCompany();
            default:
                console.log('GoodBye!');
        };
    });
};

startCompany();
