class Person {
    name;
    weight;
    height;

    constructor(name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    calculateIMC() {
        return this.weight / (this.height * this.height);
    }

    classifyIMC() {
        const imc = this.calculateIMC();
        if (imc < 18.5) {
            return "Underweight";
        } else if (imc >= 18.5 && imc < 25) {
            return "Normal weight";
        } else if (imc >= 25 && imc < 30) {
            return "Overweight";
        } else if (imc >= 30 && imc < 40) {
            return "Obese";
        } else {
            return "Severe obesity";
        }
    }
}

const carlos = new Person("Carlos", 70, 1.75);

console.log(`${carlos.name}'s BMI is ${carlos.calculateIMC().toFixed(2)} and it is classified as ${carlos.classifyIMC()}`);