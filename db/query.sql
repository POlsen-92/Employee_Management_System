USE company_db;
-- DONE-View all departments 
    -- SELECT
    --     department.id 'ID',
    --     department.name 'Department'
    -- FROM department;

-- DONE-View All Roles 
    -- SELECT 
    --     role.id 'ID',
    --     role.title 'Job Title',
    --     department.name 'Department',
    --     role.salary 'Salary'
    -- FROM department
    -- JOIN role ON department.id=role.department_id;

-- DONE View All Employees
    -- SELECT 
    --     employee.id 'ID', 
    --     CONCAT_WS(' ', employee.first_name, employee.last_name) 'Name', 
    --     role.title 'Job',
    --     department.name 'Department',
    --     role.salary 'Salary',
    --     CONCAT_WS(' ', m.first_name, m.last_name) 'Manager'
    -- FROM department 
    -- JOIN role ON department.id=role.department_id
    -- JOIN employee ON role.id=employee.role_id
    -- LEFT JOIN employee AS m ON m.id = employee.manager_id;

-- DONE-View all Managers 
    -- SELECT 
    --     employee.id 'ID', 
    --     employee.first_name 'First Name', 
    --     employee.last_name 'Last Name', 
    --     role.title 'Job',
    --     department.name 'Department',
    --     role.salary 'Salary'
    -- FROM department 
    -- JOIN role ON department.id=role.department_id
    -- JOIN employee ON role.id=employee.role_id
    -- WHERE manager_id IS NULL;
        
-- DONE View all non-managers
    -- SELECT 
    --     employee.id 'ID', 
    --     employee.first_name 'First Name', 
    --     employee.last_name 'Last Name', 
    --     role.title 'Job',
    --     department.name 'Department',
    --     role.salary 'Salary',
    --     CONCAT_WS(' ', m.first_name, m.last_name) 'Manager'
    -- FROM department 
    -- JOIN role ON department.id=role.department_id
    -- JOIN employee ON role.id=employee.role_id
    -- JOIN employee AS m ON m.id = employee.manager_id

-- DONE -- Add A Department (Name)
    -- INSERT INTO department (name) VALUES (?)

-- DONE -- Add a Role (Name, Salary, Department_ID)
    -- INSERT INTO role (title, salary, department_id) VALUES (?,?,?)

-- DONE -- Add an Employee(First Name, Last Name, Role, Manager_ID)
    -- INSERT INTO role (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)

-- DONE -- Update an Employee (New Role)
    -- UPDATE employee SET role_id = (?) WHERE employee.id = (?)

-- BONUS
    -- Update an Employee Manager
        -- UPDATE employee SET manager_id = (?) WHERE employee.id = (?)

    -- View Employees by Manager
    SELECT 
        employee.id 'ID', 
        CONCAT_WS(' ', employee.first_name, employee.last_name) 'Name', 
        role.title 'Job',
        department.name 'Department',
        role.salary 'Salary',
        CONCAT_WS(' ', m.first_name, m.last_name) 'Manager'
    FROM department 
    JOIN role ON department.id=role.department_id
    JOIN employee ON role.id=employee.role_id
    LEFT JOIN employee AS m ON m.id = employee.manager_id
    WHERE employee.manager_id = 4;

    -- View Employees by Department
    SELECT 
        employee.id 'ID', 
        CONCAT_WS(' ', employee.first_name, employee.last_name) 'Name', 
        role.title 'Job',
        department.name 'Department',
        role.salary 'Salary',
        CONCAT_WS(' ', m.first_name, m.last_name) 'Manager'
    FROM department 
    JOIN role ON department.id=role.department_id
    JOIN employee ON role.id=employee.role_id
    LEFT JOIN employee AS m ON m.id = employee.manager_id
    WHERE role.department_id = 4;

    -- Delete Department 
    
    DELETE FROM department WHERE department.id = ?;
    
    -- Delete Role 

    DELETE FROM role WHERE role.id = ?;
    
    -- Delete Employees

    DELETE FROM employee WHERE employee.id = ?;

    -- View Total Budget of the departments
