const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require('console.table');
const db = require('../config/connection');

function viewDepartments(){
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

function viewJobs() {
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

function viewEmployees() {
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

function viewManagers() {
    return new Promise((resolve, reject) => {
        const query = `SELECT employee.id 'ID', employee.first_name 'First Name', employee.last_name 'Last Name', role.title 'Job',department.name 'Department',role.salary 'Salary'FROM department JOIN role ON department.id=role.department_id JOIN employee ON role.id=employee.role_id WHERE manager_id IS NULL`

        db.query(query, (err,data) => {
            if(err){
                console.log("you messed up");
                reject(err)
            }
            resolve(console.table(data));
        });
    })
};

function viewRegEmployees(){
    return new Promise((resolve, reject) => {
        const query = `SELECT employee.id 'ID', employee.first_name 'First Name', employee.last_name 'Last Name', role.title 'Job',department.name 'Department',role.salary 'Salary',CONCAT_WS(' ', m.first_name, m.last_name) 'Manager'FROM department JOIN role ON department.id=role.department_id JOIN employee ON role.id=employee.role_id JOIN employee AS m ON m.id = employee.manager_id`

        db.query(query, (err,data) => {
            if(err){
                console.log("you messed up");
                reject(err)
            }
            resolve(console.table(data));
        });
    })
};

function viewDepEmployees() {
    return new Promise((resolve, reject) => {
        const query = ``

        db.query(query, (err,data) => {
            if(err){
                console.log("you messed up");
                reject(err)
            }
            resolve(console.table(data));
        });
    })
};

function viewManEmployees() {
    return new Promise((resolve, reject) => {
        const query = ``

        db.query(query, (err,data) => {
            if(err){
                console.log("you messed up");
                reject(err)
            }
            resolve(console.table(data));
        });
    })
};


module.exports = { viewDepartments, viewJobs, viewEmployees, viewManagers, viewRegEmployees };