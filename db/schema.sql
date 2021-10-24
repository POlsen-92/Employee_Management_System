DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department(
  id AUTO_INCREMENT INT NOT NULL PRIMARY KEY,
  name VARCHAR(30)
);

CREATE TABLE role(
  id INT NOT NULL PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT REFERENCES department(id) ON DELETE SET NULL 
);

CREATE TABLE employee(
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT REFERENCES role(id) ON DELETE SET NULL,
  manager_id INT DEFAULT NULL REFERENCES employee(id) ON DELETE SET NULL 
);