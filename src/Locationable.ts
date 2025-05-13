export default class Locationable {
  name: string;
  description?: string;
  state: string;

  constructor(name: string, description?: string) {
    this.name = name;
    this.description = description || '';
    this.state = "Free";
  }

  setReserver() {
    return this.state = "Reserved";
  }
  
  setFree() {
    return this.state = "Free";
  };

  toString() {
    return `Name: ${this.name}, Description: ${this.description}, State: ${this.state}`;
  }
}
