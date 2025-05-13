"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class House {
    constructor(name, description) {
        this.name = name;
        this.description = description || "";
        this.isLocal = false;
    }
    setLouer() {
        this.isLocal = true;
    }
    setLiberer() {
        this.isLocal = false;
    }
    getType() {
        return House;
    }
    toString() {
        return `House { name: ${this.name}, description: ${this.description} [${this.isLocal ? "Louer🚫" : "Libre✅"}] }`;
    }
}
exports.default = House;
