//'use strict';
module.exports = class Calculator {
    constructor(a, b) {
        this.a = a
        this.b = b
    }
add() {
    let sum = this.a + this.b
    return sum;
}    

product() {
    let product = this.a * this.b
    return product;
}
 
}

