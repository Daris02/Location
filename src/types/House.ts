import Locationable from "./Locationable";

export default class House implements Locationable {
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
    return House;
  }

  toString() {
    return `House { name: ${this.name}, description: ${this.description} [${this.isLocal ? "Louer🚫" : "Libre✅" }] }`;
  }
}
