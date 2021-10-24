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
    SELECT 
        employee.id 'ID', 
        employee.first_name 'First Name', 
        employee.last_name 'Last Name', 
        role.title 'Job',
        department.name 'Department',
        role.salary 'Salary',
        CONCAT_WS(' ', m.first_name, m.last_name) 'Manager'
    FROM department 
    JOIN role ON department.id=role.department_id
    JOIN employee ON role.id=employee.role_id
    LEFT JOIN employee AS m ON m.id = employee.manager_id;

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

-- Add A Department (Name)

    INSERT INTO department (name) VALUES (?)

-- Add a Role (Name, Salary, Department, ID)

    INSERT INTO role (name) VALUES (?,?,?,?)

-- Add an Employee(First Name, Last Name, Role, Manager, ID)


-- Update an Employee (New Role)



-- BONUS
    -- Update an Employee Manager


    -- View Employees by Manager


    -- View Employees by Department


    -- Delete Departments, Roles and Employees


    -- View Total Budget of the departments
