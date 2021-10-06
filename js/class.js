class Calculations {
  constructor(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;
  }
  add() {
    this.result = this.value1 + this.value2;
    return this.result;
  }
  sub() {
    this.result = this.value1 - this.value2;
    return this.result;
  }
  mul() {
    this.result = this.value1 * this.value2;
    return this.result;
  }
  div() {
    this.result = this.value1 / this.value2;
    return this.result;
  }
}
