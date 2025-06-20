"use strict";
// learning function
// normal function
// arrow function
// normal function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
// arrow function
const addArrow = (num1, num2) => num1 + num2;
// object --> function --> method
const poorUser = {
    name: "Tanim Bin Aziz",
    balance: 0,
    addBalance(balance) {
        return `My new balance is :${this.balance + balance}`;
    },
};
