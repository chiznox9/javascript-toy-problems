function speedDetector() {
    let speed = prompt("Enter the car speed:");
    speed = parseInt(speed);
    let points = 0;

    if (speed <= 70) {
        console.log("Ok");
    } else {
        points = Math.floor((speed - 70) / 5);
        if (points > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${points}`);
        }
    }
}

