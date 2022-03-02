const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./db/connection');
require('console.table');



function options() {
    inquirer.prompt(
        [{
            type: 'list',
            message: 'Choose one of the following options',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee'],
            name: 'options'
        }])
    .then((response) => {
    switch (response.options) {
        case 'view all departments':
            viewDepartments();
            break;
        case 'view all roles':
            viewRoles();
            break;
        case 'view all employees':
            viewEmployees();
            break;
        case 'add a department':
            addDepartment();
            break;
            // post department
        case 'add a role':
            addRole();
            break;
            // post roll
        case 'add an employee':
            addEmployee();
            break;
            // post employee
        case 'update an employee':
            updateEmployee();
            // run the update function which does the following
            // get employees in a list 
            // when an employee is selected the user is taken through the employee prompts with the values in the inputs
        };
    });
};

options();

async function viewDepartments() {
    console.log("Viewing departments");
    const departments = await db.query("SELECT * FROM departments_db.departments");
    console.table(departments);
    options();
};

async function viewRoles() {
    console.log("Viewing roles");
    const roles = await db.query("SELECT * FROM departments_db.roles");
    console.table(roles);
    options();
};

async function viewEmployees() {
    console.log("Viewing employees");
    employees = await db.query("");
};

function addDepartment() {
    inquirer.prompt(
        [{
            type: 'input',
            message: 'Enter the department name',
            name: 'departmentName'
        }])
        .then((response) => {
            console.log(response);
        // post department name and add to department table

    });
};

function addRole() {
    inquirer.prompt(
        [{
            type: 'input',
            message: 'Enter the name of the role',
            name: 'roleName'
        },
        {
            type: 'input',
            message: 'Enter the role salary',
            name: 'roleSalary'
        },
        {
            type: 'input',
            message: 'Enter the department of the role',
            name: 'roleDepartment'
        }])
    .then((response) => {
        console.log(response);
        // add roleName to role name in table
        // add roleSalary to role salary in table
        // add roleDepartment to role department in table
    });
};

function addEmployee() {
    inquirer.prompt(
        [{
            type: 'input',
            message: 'Enter the first name of the employee',
            name: 'employeeFirstName'
        },
        {
            type: 'input',
            message: 'Enter the last name of the employee',
            name: 'employeeLastName'
        },
        {
            type: 'input',
            message: 'Enter the role of the employee',
            name: 'employeeRole'
        },
        {
            type: 'input',
            message: 'Enter the manager of the employee',
            name: 'employeeManager'
        }])
    .then((response) => {
        console.log(response);
        // add employeeFirstName to table
        // add employeeLastName to table
        // add employeeRole to table
        // add employeeManager to table
    });
};

// updateEmployee => {
//     // get employees
    
// } 
