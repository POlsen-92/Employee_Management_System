USE company_db;

INSERT INTO department (name)
VALUES ("IT"),
       ("Finance"),
       ("Software Development"),
       ("Legal");
       
INSERT INTO role (title,salary, department_id)
VALUES ("Support Lead",50000,1),
       ("Support Desk",40000,1),
       ("Accounts Receivables Manager",80000,2),
       ("Accountant",60000,2),
       ("Web Lead",180000,3),
       ("Software Engineer",150000,3),
       ("Web Developer",120000,3),
       ("Lawyer",200000,4),
       ("Secretary",60000,4);

INSERT INTO employee (first_name,last_name, role_id, manager_id)
VALUES ("Bob","Smith",1,0),
       ("Vanessa","Brooks",3,0),
       ("Carrie","Holland",5,0),
       ("John","Stone",8,0),
       ("Larry","Scott",10,0),
       ("Candace","Holt",2,1),
       ("Johnathan","Rust",2,1),
       ("Earnest","Hemingway",4,2),
       ("Nina","Simone",4,2),
       ("Jennifer","Nettles",6,3),
       ("Jason","Mamoa",6,3),
       ("Ryan","Reynolds",7,3),
       ("Gina","Carter",7,3),
       ("Lana","Del Rey",9,4);

       