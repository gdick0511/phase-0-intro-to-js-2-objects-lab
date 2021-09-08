// Write your solution in this file!

const employee = {
    name: "Linux",
    address: "Plannet Earth",
};

function updateEmployeeWithKeyAndValue(obj,key,value) {
    const newEmployee = {...obj}
    newEmployee[key] = value;
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value) {
    obj[key] = value;
    return obj
}

function deleteFromEmployeeByKey(obj,key) {
    const nonEmployee = {...obj};
    delete nonEmployee[key];
    return nonEmployee
}

function destructivelyDeleteFromEmployeeByKey(obj,key) {
    delete obj[key];
    return obj
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
