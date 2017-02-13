
'use strict'
var myApp = require('../app/library.js');

describe('Prime number generator test', function (){
	describe('Empty array test', function(){
		it('should return [] for 1 input', function(){
			expect(myApp.getPrimes(1)).toEqual([]);
		});

	});

	describe('Test for Invalid Input', function(){
		it('should return `Invalid Input` for non-numeric characters', function(){
			expect(myApp.getPrimes('Andela-John-Obi')).toBe('Invalid Input');
		});

		it('should return `Invalid Input` for 0 as input', function(){
			expect(myApp.getPrimes(0)).toBe('Invalid Input');
		});

		it('should return `Invalid Input` for negative number input', function(){
			expect(myApp.getPrimes(-4)).toBe('Invalid Input');
		});

	});

	describe('Test for Array as output', function(){
		it('should return `Array` when tested for its data type', function(){
			expect(Object.prototype.toString.call(myApp.getPrimes(5)).slice(8, -1)).toBe('Array');
		});		
	});

	describe('Test for Prime Numbers', function(){
		it('should return [2,3,5] for 5 as input', function(){
			expect(myApp.getPrimes(5)).toEqual([2,3,5]);
		});

		it('should return [2] for 2 as input', function(){
			expect(myApp.getPrimes(2)).toEqual([2]);
		});

		it('should return [2,3,5,7,11,13,17,19] for 20 as input', function(){
			expect(myApp.getPrimes(20)).toEqual([2,3,5,7,11,13,17,19]);
		});
	});
});