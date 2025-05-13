"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(name, description) {
        this.name = name;
        this.description = description || '';
        this.isLocal = false;
    }
    setLouer() {
        this.isLocal = true;
    }
    setLiberer() {
        this.isLocal = false;
    }
    getType() {
        return Car;
    }
    toString() {
        return `Car { name: ${this.name}, description: ${this.description} [${this.isLocal ? "Louer🚫" : "Libre✅"}] }`;
    }
}
exports.default = Car;
