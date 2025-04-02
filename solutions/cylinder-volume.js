class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    calculateVolume() {
        return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
    }
}

let cylinder = new Cylinder(5, 10);
console.log(`Volume of the cylinder: ${cylinder.calculateVolume()} cubic units`);

