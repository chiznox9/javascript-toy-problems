function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let tax = grossSalary * 0.15; // Example Tax Rate (adjust based on KRA)
    let nhif = 500; // Example NHIF deduction
    let nssf = 200; // Example NSSF deduction

    let netSalary = grossSalary - (tax + nhif + nssf);
    return netSalary;
}

console.log(calculateNetSalary(50000, 10000)); // Example
