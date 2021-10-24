const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require('console.table');
const db = require('../config/connection');

function addDepartment(){
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
}

function addRole(){
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
}

function addEmployee(){
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
}




module.exports = { addDepartment, addRole, addEmployee };