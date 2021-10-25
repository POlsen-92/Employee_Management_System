const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require('console.table');
const db = require('../config/connection');

function deleteEmployee() {
    const query = ``

    db.query(query, (err,data) => {
        if(err){
            console.log("you messed up");
            console.log(err)
        }
        console.table("You Did it!");
    });
}

function deleteRole() {
    const query = ``

    db.query(query, (err,data) => {
        if(err){
            console.log("you messed up");
            console.log(err)
        }
        console.table("You Did it!");
    });
}

function deleteDepartment() {
    const query = ``

    db.query(query, (err,data) => {
        if(err){
            console.log("you messed up");
            console.log(err)
        }
        console.table("You Did it!");
    });
}

module.exports = { deleteEmployee, deleteRole, deleteDepartment };