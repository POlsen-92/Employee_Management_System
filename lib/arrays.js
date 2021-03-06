const db = require('../config/connection');

// POPULATE ARRAY OF ALL DEPARTMENTS //
function getDepArray() {
    return new Promise((resolve, reject) => {
        const query = `SELECT department.id 'ID', department.name 'Department' FROM department`

        db.query(query, (err, data) => {
            if(err){
                console.log("you messed up");
                reject(err)
            } else {
                depArray = data;
                // console.log(depArray)
                resolve(depArray)
            };
        });
    });
};

//POPULATE ARRAY OF ALL JOBS //
function getJobArray() {
    return new Promise((resolve, reject) => {
        const query = `SELECT role.id 'ID',role.title 'Title',department.name 'Department',role.salary 'Salary' FROM department JOIN role ON department.id=role.department_id`

        db.query(query, (err, data) => {
            if(err){
                console.log("you messed up");
                reject(err)
            } else {
                jobArray = data;
                // console.log(jobArray)
                resolve(jobArray);
            };
        });
    });
};

// POPULATE ARRAY OF ALL EMPLOYEES //
function getEmpArray() {
    return new Promise((resolve, reject) => {
        const query = `SELECT employee.id 'ID', CONCAT_WS(' ', employee.first_name, employee.last_name) 'Name', role.title 'Job',department.name 'Department',role.salary 'Salary', CONCAT_WS(' ', m.first_name, m.last_name) 'Manager' FROM department JOIN role ON department.id=role.department_id JOIN employee ON role.id=employee.role_id LEFT JOIN employee AS m ON m.id = employee.manager_id`

        db.query(query, (err, data) => {
            if(err){
                console.log("you messed up");
                reject(err)
            } else {
                empArray = data;
                // console.log(empArray)
                resolve(empArray);
            };
        });
    });
};


module.exports = { getDepArray, getEmpArray, getJobArray };