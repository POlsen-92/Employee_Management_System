const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require('console.table');
const db = require('./config/connection');
const { viewDepartments, viewJobs, viewEmployees, viewManagers, viewRegEmployees } = require('./lib/view');
const { addDepartment, addEmployee } = require ('./lib/add');
const { updateEmployee } = require ('./lib/update');
// const { deleteEmployee, deleteRole, deleteDepartment } = require ('./lib/delete');
// const { budgetDepartment, budgetCompany } = require ('./lib/budget');

let depArray = [];
let jobArray = [];
let empArray = [];

function getDepArray() {
    const query = `SELECT department.id 'ID', department.name 'Department' FROM department`

    db.query(query, (err, data) => {
        if(err){
            console.log("you messed up");
            reject(err)
        } else {
            depArray = data;
        }
    });
}

getDepArray();

function getJobArray() {
    const query = `SELECT role.id 'ID',role.title 'Job Title',department.name 'Department',role.salary 'Salary' FROM department JOIN role ON department.id=role.department_id`

    db.query(query, (err, data) => {
        if(err){
            console.log("you messed up");
            reject(err)
        } else {
            jobArray = data;
        }
    });
}

getJobArray();

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
                addRole()
                break;
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

async function addRole(){
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
                }
                console.log("You Did It!");
                startCompany();
            });
        })
}



// startCompany();

exports.startCompany = startCompany;