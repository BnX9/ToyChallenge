const prompt = require("prompt-sync")(); 
 
// Functions for Salary Checker

function salaryChecker(){
  const basicSalary = prompt("Enter basic salary: ")
  const benefits = prompt(" Enter benefits: ")
  const payee = getPayee(basicSalary)
  const NSSF = basicSalary * 0.06
  const NHIF = 500
  const netSalary = basicSalary - benefits - payee - NSSF - NHIF

// print values to the console

  console.log("*****************************")
  console.log("Basic salary: "+basicSalary);
  console.log("benefits: "+benefits);
  console.log("payee: "+payee);
  console.log("NSSF: "+NSSF);
  console.log("NHIF: "+NHIF);
  console.log("*****************************")
  console.log("Net Salary: "+netSalary)
  console.log("*****************************")
}

// get payee salary

function getPayee(salary){
  let payee
  
  if(salary > 800000){
    payee = salary * 0.35
  } else if (salary > 500000){
    payee = salary * 0.325
  } else if (salary > 32333){
    payee = salary * 0.3
  } else if (salary > 24000){
    payee = salary * 0.25
  } else if (salary < 24001) (
    payee = salary * 0.1
  )
  return payee
}

// Tester
salaryChecker()