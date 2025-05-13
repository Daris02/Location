"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Locationable {
    constructor(name, description) {
        this.name = name;
        this.description = description || '';
        this.state = "Libre";
    }
    setReserver() {
        return this.state = "Reserver";
    }
    setLiberer() {
        return this.state = "Libre";
    }
    ;
    toString() {
        return `Name: ${this.name}, Description: ${this.description}, State: ${this.state}`;
    }
}
exports.default = Locationable;
