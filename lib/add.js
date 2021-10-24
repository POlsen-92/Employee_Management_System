const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require('console.table');
const db = require('../config/connection');

function addDepartment(){
    return new Promise((resolve, reject) => {
        inquirer.prompt({
            message: "What is the Name of the New Department?",
            type: "input",
            name: "name",
        }).then(({ name }) => {
            const query = `INSERT INTO department (name) VALUES (?)`

            db.query(query, name, (err,data) => {
                if(err){ 
                    console.log("you messed up");
                    reject(err)
                }
                resolve(console.log("You Did It!"));
            });
        })
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




module.exports = { addDepartment };