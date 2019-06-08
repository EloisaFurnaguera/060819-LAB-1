// ///////////////////////////////////////////////////////
// PART 1
// Account information:


let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map


// ///////////////////////////////////////////////////////
// Create User Info Display:
function printUserInfo(accountHolder, accountNumber, businessName){

// Add function to print account information 
console.log(`Account Holder: ${accountHolder}`);

// Add function to print all addresses, including a header

console.log(`Account Number: ${accountNumber}`);

// Add function to print phone types and numbers

console.log(`Business Address: ${businessName}`);

}

// console.log(printUserInfo('gaga', 646446, 'yeyeeh'))



// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
const transactions = new Map ()


// Add function to add transactions
function addTrans (date, transVal){

    transactions.set(date, transVal);

}

// Use the function to add transactions

addTrans ('May-2', -500)
addTrans ('May-13', 1200)
addTrans ('May-15', -100)
addTrans ('May-21', -359)
addTrans ('May-29', 2200)

// console.log(transactions)

// Add function to show balance status

function showBalance(Map){

    
}

showBalance(transactions)

// Add function to show transactions

function showTran(Map){
    

    console.log (Map)
}

showBalance(transactions)


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




