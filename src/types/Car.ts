import Locationable from "./Locationable";

export default class Car implements Locationable {
  name: string;
  description?: string;
  isLocal: boolean;

  constructor(name, description?) {
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
    return `Car { name: ${this.name}, description: ${this.description} [${this.isLocal ? "Louer🚫" : "Libre✅" }] }`;
  }
}
