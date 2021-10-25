const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require('console.table');
const db = require('./config/connection');
const { viewDepartments, viewJobs, viewEmployees, viewManagers, viewRegEmployees } = require('./lib/view');
const { addDepartment, } = require ('./lib/add');
// const { updateEmployee } = require ('./lib/update');
// const { deleteEmployee, deleteRole, deleteDepartment } = require ('./lib/delete');
// const { budgetDepartment, budgetCompany } = require ('./lib/budget');

let depArray = [];
let jobArray = [];
let empArray = [];

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
                addEmployee()
                break;
            case "Update an Employee":
                console.log("Updating an Employee");
                updateEmployeeRole()
                break;
            default:
                console.log('GoodBye!');
        };
    });
};


// FUNCTIONS FOR GETTING ARRAYS
function getDepArray() {
    const query = `SELECT department.id 'ID', department.name 'Department' FROM department`

    db.query(query, (err, data) => {
        if(err){
            console.log("you messed up");
            reject(err)
        } else {
            depArray = data;
            // console.log(depArray)
        }
    });
}

getDepArray();

function getJobArray() {
    const query = `SELECT role.id 'ID',role.title 'Title',department.name 'Department',role.salary 'Salary' FROM department JOIN role ON department.id=role.department_id`

    db.query(query, (err, data) => {
        if(err){
            console.log("you messed up");
            reject(err)
        } else {
            jobArray = data;
            // console.log(jobArray)
        }
    });
}

getJobArray();

function getEmpArray() {
    const query = `SELECT employee.id 'ID', CONCAT_WS(' ', employee.first_name, employee.last_name) 'Name', role.title 'Job',department.name 'Department',role.salary 'Salary', CONCAT_WS(' ', m.first_name, m.last_name) 'Manager' FROM department JOIN role ON department.id=role.department_id JOIN employee ON role.id=employee.role_id LEFT JOIN employee AS m ON m.id = employee.manager_id`

    db.query(query, (err, data) => {
        if(err){
            console.log("you messed up");
            reject(err)
        } else {
            empArray = data;
            // console.log(empArray)
        }
    });
}

getEmpArray();


// ADD JOB //
function addRole(){
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


// ADD EMPLOYEE
function addEmployee(){
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

    inquirer.prompt([
        {
            message: "What is the First Name of the New Employee?",
            type: "input",
            name: "firstName",
        }, {
            message: "What is the Last Name of the New Employee?",
            type: "input",
            name: "lastName",
        },{
            message: "What is the Job of the New Employee?",
            type: "list",
            name: "role",
            choices: inqJobs,
        },{
            message: "Will this Employee Have a Manager? (Y/N)",
            type: "confirm",
            name: "willManager",
        },{   
            message: "Who is the Manager of the New Employee?",
            type: "list",
            name: "manager",
            choices: inqEmployees,
            when: (answers) => {answers.willManager === true},
            default: null
        }
    ]).then((answers) => {
        const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`

        db.query(query, [`${answers.firstName}`, `${answers.lastName}`, `${answers.role}`,`${answers.manager}`], (err,data) => {
            if(err){
                console.log("you messed up");
            } else {
            console.log("You Did It!");
            }
            startCompany();
        });
    })
}


// UPDATE EMPLOYEE JOB//
function updateEmployeeRole(){
    const inqEmployees = empArray.map(employee => {
        return {
            name:employee.Name,
            value:employee.ID
            }
        })
    const inqJobs = jobArray.map(role => {
        return {
            name:role.Title,
            value:role.ID
            }
        })
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
            } else {
            console.log("You Did It!");
            }
            startCompany();
        });
    })
}

//UPDATE EMPLOYEE MANAGER
function updateEmployeeRole(){
    const inqEmployees = empArray.map(employee => {
        return {
            name:employee.Name,
            value:employee.ID
            }
        })

    inquirer.prompt([
        {
            message: "Which Employee Do You Want to Update?",
            type: "list",
            name: "name",
            choices: inqEmployees,
        }, {
            message: "Which Employee Should Be Their Manager?",
            type: "list",
            name: "manager",
            choices: inqEmployees
        }
    ]).then((answers) => {
        const query = `UPDATE employee SET manager_id = (?) WHERE employee.id = (?)`

        db.query(query, [`${answers.manager}`, `${answers.name}`], (err,data) => {
            if(err){
                console.log("you messed up");
            } else {
            console.log("You Did It!");
            }
            startCompany();
        });
    })
}


startCompany();
