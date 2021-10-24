const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require('console.table');
const db = require('../config/connection');

function viewDepartments() => {
    const query = `SELECT department.id 'ID', department.name 'Department'FROM department`

    db.query(query, (err,data) => {
        if(err){
            console.log({error:"you messed up"});
            return;
        }
        console.table(`${data}`);
    });
}

function viewJobs() {

    
}

function viewEmployees() {

    
}

function viewManagers() {

    
}

function viewRegEmployees(){

    
}

function viewDepEmployees() {

    
}

function viewManEmployees() {

    
}


module.exports = { viewDepartments, viewJobs, viewEmployees, viewManagers, viewRegEmployees };