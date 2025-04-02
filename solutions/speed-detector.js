function checkSpeed(speed) {
    if (speed < 70) return "Ok";
    
    let points = Math.floor((speed - 70) / 5);
    return points > 12 ? "License suspended" : `Points: ${points}`;
}

console.log(checkSpeed(80)); // Output: Points: 2
