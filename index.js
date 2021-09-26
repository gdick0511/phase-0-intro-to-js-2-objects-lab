// Write your solution in this file!

const employee = {
    name: "Linux",
    address: "Planet Earth",
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



/*
const newbie = destructivelyUpdateEmployeeWithKeyAndValue(employee,"name","Babes");
*/
/*
const newbie = deleteFromEmployeeByKey(employee,"name");
*/

/*
const newbie = destructivelyDeleteFromEmployeeByKey(employee,"name");
*/


// you still need to add, commit and push this lab udpate 2.0

