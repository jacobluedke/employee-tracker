DROP DATABASE IF EXISTS departments_db;
CREATE DATABASE departments_db;

USE departments_db;

CREATE TABLE departments (
    id int not null primary key auto_increment,
    name varchar(30)
);

CREATE TABLE roles (
    id int not null primary key auto_increment,
    title varchar(30),
    salary decimal,
    department_id int,
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE CASCADE
);

CREATE TABLE employees (
    id int not null,
    first_name varchar(30),
    last_name varchar(30),
    role_id int,
    manager_id int,
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
    ON DELETE CASCADE,
    FOREIGN KEY (manager_id)
    REFERENCES employees(id)
    ON DELETE SET NULL
);