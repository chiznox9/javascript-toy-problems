class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
    }
}

let cylinder = new Cylinder(5, 10);
console.log(cylinder.getVolume()); // Output: Volume with 4 decimal places
