const prompt = require("prompt-sync")({sigint:true}); //Initialize prompt method
let basicSalary = (Number(prompt("Enter basic salary amount: ")))
let benefits = (Number(prompt("Enter benefits amount: ")))
let grossSalary = basicSalary + benefits
let nssf = 1080;
function payeRateCalc(basicSalary, benefits){   // function to calculate the PAYE rate inclusive of nssf
    let taxablePay = basicSalary + benefits - nssf;
    if(taxablePay){
        switch (true) {
            case (taxablePay <= 24000):
                payeRate = taxablePay * 0.1;            
                break;
            case (taxablePay > 24000 && taxablePay <= 32333):
                payeRate = taxablePay * 0.25;
                break;
            case (taxablePay > 32333):
                payeRate = taxablePay * 0.3;
                break;
    
            default:
                payeRate = 0;
                break;
        }
        return payeRate
    }
}
console.log(payeRateCalc(basicSalary, benefits))

function nhifCalc(grossSalary){          //function to calculate nhif amount
    if(grossSalary){
        switch (true) {
            case (grossSalary <= 5999):
                nhif = 150;
                break;
            case (grossSalary >=6000  && grossSalary <= 7999 ):
                nhif = 300;
                break;
            case (grossSalary >=8000 && grossSalary <= 11999):
                nhif = 400;
                break;
            case (grossSalary >=12000 && grossSalary <= 14999):
                nhif = 500;
                break;
            case (grossSalary >=15000 && grossSalary <= 19999):
                nhif = 600;
                break;
            case (grossSalary >=20000 && grossSalary <= 24999):
                nhif = 750;
                break;
            case (grossSalary >=25000 && grossSalary <= 29999):
                nhif = 850;
                break;
            case (grossSalary >=30000 && grossSalary <= 34999):
                nhif = 900;
                break;
            case (grossSalary >=35000 && grossSalary <= 39999):
                nhif = 950;
                break;
            case (grossSalary >=40000 && grossSalary <= 44999):
                nhif = 1000;
                break;
            case (grossSalary >=45000 && grossSalary <= 49999):
                nhif = 1100;
                break;   
            case (grossSalary >=50000 && grossSalary <= 59999):
                nhif = 1200;
                break;
            case (grossSalary >=60000 && grossSalary <= 69999):
                nhif = 1300;
                break;
            case (grossSalary >=70000 && grossSalary <= 79999):
                nhif = 1400;
                break;
            case (grossSalary >=80000 && grossSalary <= 89999):
                nhif = 1500;
                break;
            case (grossSalary >=90000 && grossSalary <= 99999):
                nhif = 1600;
                break;
            case (grossSalary >=100000):
                nhif = 1700;
                break;   
            default:
                nhif = 0;
                break;
        }
        
    }
    return nhif
}
console.log(nhifCalc(grossSalary))

function netSalaryCalc(grossSalary, nhif, payeRate){    //function to calculate net salary
    let  netpay = grossSalary - nhif - payeRate
    return netpay
}
console.log(netSalaryCalc(grossSalary, nhif, payeRate))

