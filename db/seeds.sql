USE company_db;

INSERT INTO department (id,name)
VALUES (1,"IT"),
       (2,"Finance"),
       (3,"Software Development"),
       (4,"Legal"),
       (5,"Sales");
       
INSERT INTO role (id,title,salary, department_id)
VALUES (11,"Support Lead",50000,1),
       (12,"Support Desk",40000,1),
       (21,"Accounts Receivables Manager",80000,2),
       (22,"Accountant",60000,2),
       (31,"Web Lead",180000,3),
       (32,"Software Engineer",150000,3),
       (33,"Web Developer",120000,3),
       (41,"Lawyer",200000,4),
       (42,"Secretary",60000,4),
       (51,"Account Executive",120000,5),
       (52,"Professional Consultant",110000,5),
       (53,"Account Manager",100000,5);

INSERT INTO employee (id, first_name,last_name, role_id, manager_id)
VALUES (111,"Bob","Smith",11,NULL),
       (211,"Vanessa","Brooks",21,NULL),
       (311,"Carrie","Holland",31,NULL),
       (411,"John","Stone",41,NULL),
       (511,"Larry","Scott",51,NULL),
       (121,"Candace","Holt",12,111),
       (122,"Johnathan","Rust",12,111),
       (221,"Earnest","Hemingway",22,211),
       (222,"Nina","Simone",22,211),
       (321,"Jennifer","Nettles",32,311),
       (322,"Jason","Mamoa",32,311),
       (331,"Ryan","Reynolds",33,311),
       (332,"Gina","Carter",33,311),
       (421,"Lana","Del Rey",42,411),
       (521,"Cheryl","Crowe",52,511),
       (531,"George","Strait",53,511),
       (532,"Trevor","Noah",53,511);

       