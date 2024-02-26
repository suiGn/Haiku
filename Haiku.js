const path = require('path');
const packageJson = require(path.join(__dirname, './package.json'));

class Haiku {
    constructor(name) {
        this.name = name;
        this.neurons = {};
        this.version = {
            Haiku: packageJson.version
        };
     
    }
    // Method to add a neuron to this Haiku

    // Method to animate the Haiku
    animate() {
        // animation logic here
    }
    // Method to process an image
    processImage(image) {
        // Add your image processing logic here
    }
    // Add more methods as needed
}
module.exports = Haiku;
