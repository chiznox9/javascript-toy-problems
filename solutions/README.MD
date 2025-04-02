# JavaScript Toy Problems

## Overview
This repository contains JavaScript solutions to various coding challenges, including a student grade generator, speed detector, net salary calculator, bubble sort, staircase problem, and cylinder volume calculation.

Each solution is implemented in a separate file within the `solutions` directory.

## Table of Contents
- [Challenges](#challenges)
  - [Student Grade Generator](#student-grade-generator)
  - [Speed Detector](#speed-detector)
  - [Net Salary Calculator](#net-salary-calculator)
  - [Bubble Sort](#bubble-sort)
  - [Staircase Problem](#staircase-problem)
  - [Cylinder Volume Calculator](#cylinder-volume-calculator)
- [Setup and Usage](#setup-and-usage)
- [Author](#author)

## Challenges

### 1. Student Grade Generator
A function that takes student marks as input (0 - 100) and returns a corresponding grade:
- **A**: 80 and above
- **B**: 60 - 79
- **C**: 50 - 59
- **D**: 40 - 49
- **E**: Below 40

📌 **File:** `solutions/student-grade-generator.js`

### 2. Speed Detector
A program that takes a car's speed as input and determines if the driver should receive demerit points:
- **Below 70 km/h**: "Ok"
- **Above 70 km/h**: 1 point per 5 km over the limit
- **Above 12 points**: "License suspended"

📌 **File:** `solutions/speed-detector.js`

### 3. Net Salary Calculator
A program that calculates an individual’s net salary after deductions (Tax, NHIF, and NSSF) based on provided values.

📌 **File:** `solutions/net-salary-calculator.js`

### 4. Bubble Sort
A function that sorts an array of numbers in ascending order using the Bubble Sort algorithm.

📌 **File:** `solutions/bubble-sort.js`

### 5. Staircase Problem
A function that prints a right-aligned staircase of `n` levels using `#`.

📌 **File:** `solutions/staircase.js`

### 6. Cylinder Volume Calculator
A program that calculates the volume of a cylinder using the formula:  
**V = πr²h**, rounded to four decimal places.

📌 **File:** `solutions/cylinder-volume.js`

## Setup and Usage
### Prerequisites
Ensure you have **Node.js** installed. You can check by running:
```sh
node -v
```

### Running a Solution
To execute a specific script, navigate to the project folder and run:
```sh
node solutions/student-grade-generator.js
```
Replace `student-grade-generator.js` with the file you want to test.

## Author
Developed by **James**.

Feel free to contribute, raise issues, or suggest improvements! 🚀

