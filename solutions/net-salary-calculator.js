function calculateNetSalary() {
    
    let basicSalary = parseFloat(prompt("Enter your basic salary:"));
    let benefits = parseFloat(prompt("Enter your benefits:"));

    
    let grossSalary = basicSalary + benefits;

    
    let paye = 0;
    if (basicSalary <= 24000) {
        paye = basicSalary * 0.10;
    } else if (basicSalary <= 32333) {
        paye = (24000 * 0.10) + ((basicSalary - 24000) * 0.25);
    } else if (basicSalary <= 500000) {
        paye = (24000 * 0.10) + (8333 * 0.25) + ((basicSalary - 32333) * 0.30);
    } else if (basicSalary <= 800000) {
        paye = (24000 * 0.10) + (8333 * 0.25) + (466667 * 0.30) + ((basicSalary - 500000) * 0.325);
    } else {
        paye = (24000 * 0.10) + (8333 * 0.25) + (466667 * 0.30) + (300000 * 0.325) + ((basicSalary - 800000) * 0.35);
    }

    
    let nhif = grossSalary * 0.0275; // 2.75% of gross salary

    
    let nssf = basicSalary * 0.06;

    
    let netSalary = grossSalary - (paye + nhif + nssf);

    // Output results
    console.log(`Basic Salary: Ksh ${basicSalary}`);
    console.log(`Benefits: Ksh ${benefits}`);
    console.log(`Gross Salary: Ksh ${grossSalary}`);
    console.log(`PAYE: Ksh ${paye}`);
    console.log(`NHIF: Ksh ${nhif}`);
    console.log(`NSSF: Ksh ${nssf}`);
    console.log(`Net Salary: Ksh ${netSalary}`);
}

calculateNetSalary();

