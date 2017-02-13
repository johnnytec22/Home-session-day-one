

'use strict'

var myApp = require('../app/library.js');




  'use strict';
describe("CALCULATOR COMPUTATIONAL FUNCTIONALITY AND PROPERTY TEST", function(){

    it("The calculator should be a type of `object`, and an instance of the `Car` class", function() {
      var calculator = new myApp('Scientific', 'Casio');
      expect(typeof calculator).toEqual(typeof {});
      expect(calculator instanceof myApp).toBeTruthy();
    });

    it("should return Scientific as its type", function() {
      var calculator = new myApp('Scientific', 'Casio');
      expect(calculator.type).toEqual('Scientific');
      expect(calculator.manufacturer).toBe('Casio');
    });

    it("should perform addition of numbers", function() {
      var calculator = new myApp('Scientific', 'Casio');
      expect(calculator.add(1,3,5)).toEqual(9);
      
    });

    it("should perform subtraction of numbers", function() {
      var calculator = new myApp('Scientific', 'Casio');
      expect(calculator.subtract(11,1)).toEqual(10);
      
    });

    it("should perform multiplication of numbers", function() {
      var calculator = new myApp('Scientific', 'Casio');
      expect(calculator.multiply(3,4)).toEqual(12);
      
    });

    it("should perform division of numbers", function() {
      var calculator = new myApp('Scientific', 'Casio');
      expect(calculator.divide(15, 3)).toEqual(5);
      
    });

    it("should perform square root operation", function() {
      var calculator = new myApp('Scientific', 'Casio');
      expect(calculator.sqroot(64)).toEqual(8);
      
    });

    it("should perform exponential operation", function() {
      var calculator = new myApp('Scientific', 'Casio');
      expect(calculator.power(5,2)).toEqual(25);
      
    });
});
