SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;

INSERT INTO departments (name)
VALUES 
    ("Sales"),
    ("Engineering"),
    ("Finace"),
    ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES 
    ("Sales Lead", "100000", 1),
    ("Salesperson", "80000", 1),
    ("Lead Engineer", "150000", 2),
    ("Software Engineer", "120000", 2),
    ("Account Manager", "160000", 3),
    ("Accountant", "125000", 3),
    ("Legal Team Lead", "250000", 4),
    ("Lawyer", "190000", 4);

INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUES 
    ("Jon", "Snow", null, 1),
    ("Arya", "Stark", null, 3),
    ("Robert", "Baratheon", null, 5),
    ("Bran", "Stark", null, 7),
    ("Rob", "Stark", 1, 2),
    ("Jaime", "Lannister", 3, 4),
    ("Tyrion", "Lannister", 5, 6),
    ("Sansa", "Stark", 7, 8);
