const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require('console.table');
const db = require('../config/connection');

function budgetDepartment() {
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

function budgetCompany() {
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


module.exports = { budgetDepartment, budgetCompany };