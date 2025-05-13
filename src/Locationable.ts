export default class Locationable {
  name: string;
  description?: string;
  state: string;

  constructor(name: string, description?: string) {
    this.name = name;
    this.description = description || '';
    this.state = "Libre";
  }

  setReserver() {
    return this.state = "Reserver";
  }
  
  setLiberer() {
    return this.state = "Libre";
  };

  toString() {
    return `Name: ${this.name}, Description: ${this.description}, State: ${this.state}`;
  }
}
