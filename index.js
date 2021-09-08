// Write your solution in this file!

const employee = {
    name: "Linux",
    address: "Plannet Earth",
};

function updateEmployeeWithKeyAndValue(obj,key,value) {
    const newEmployee = {...employee}
    newEmployee[key] = value;
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value) {
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(obj,key) {
    const nonEmployee = {...employee};
    delete nonEmployee.name;
    return nonEmployee
}

function destructivelyDeleteFromEmployeeByKey(obj,key) {
    delete employee.name;
    return employee
}


// you still need to add, commit and push this lab

/*
console.log(updateEmployeeWithKeyAndValue(employee,"name","Cara"));
*/
/*
const newbie = updateEmployeeWithKeyAndValue(employee,"name","Cara");
*/
/*
console.log(newbie);
*/
/*
console.log(employee);
*/
/*
const newGuy = destructivelyUpdateEmployeeWithKeyAndValue(employee,"name","Chad");
*/
/*
console.log(newGuy);
console.log(employee);
*/

/*
const updatedName = deleteFromEmployeeByKey(employee,"name");

const eraseName = destructivelyDeleteFromEmployeeByKey(employee,"name");

console.log(eraseName);

console.log(employee);
*/
