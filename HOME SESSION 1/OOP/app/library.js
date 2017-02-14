



function Computation()
{

	this.class_name = 'Computation';

	this.getType = function(){
		return 'This object\'s type is: '+this.class_name;
	}

	this.add = function()
	{
		var sum = 0;
		for(digit of arguments)
		{
			sum += digit;
		}
		return sum;
	};

	this.subtract = function(num2, num1)
	{
		var difference = num2 - num1;
		return difference;
	};

	this.multiply = function(num2, num1)
	{
		var product = num2 * num1;
		return product;
	};

	this.divide = function(num2, num1)
	{
		var division = num2/num1;
		return division;
	};
}

function Computer(name, manufacturer, storage_size)
{
	this.class_name = 'Computer';
	this.name = name;
	this.manufacturer = manufacturer;
	this.storage_size = storage_size;


	//class property(private property)
	var storageMedia = {};
	//class method(private method)
	var storeData = function(data,value)
	{
		storageMedia[data] = value;
	};

	this.getData = function(data,value)
	{

		storeData(data, value);
	};

	this.retrieveData = function(data)
	{
		return storageMedia[data];
	};

	this.displayInfo = function(){
	return this.name + ' is manufactured by '+this.manufacturer+' with a storage size of '+this.storage_size;
}


}


function Calculator(type, manufacturer)
{
	this.class_name = 'Calculator';

	this.type = type;
	this.manufacturer = manufacturer;

	this.sqroot = function(number)
	{
		return Math.sqrt(number);
	}

	this.power = function(number, power)
	{
		return Math.pow(number, power);
	}

	this.cubicRoot = function(number)
	{
		return Math.cbrt(number);
	}

	//method overriding
	this.displayInfo = function(){
		return 'My Calculator type is '+this.type + ' and it is manufactured by '+this.manufacturer+' with a storage size of ';
	}
}



//Inheritance
Computer.prototype = new Computation();
Computer.prototype.constructor = Computer;

Calculator.prototype = new Computer();
Calculator.prototype.constructor = Calculator;

//exporting class Calculator for testing with jasmine
module.exports = Calculator;
