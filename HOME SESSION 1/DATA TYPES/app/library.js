
var exports = module.exports = {};

exports.dataTypes = function(datatype){
	//obtaining the object type of the data entered
	var objectType = Object.prototype.toString.call(datatype).slice(8,-1);

	if(objectType === 'String')
	{
		return datatype.length;
	}else if (objectType === 'Null' || objectType === 'Undefined'){
		return 'no value';
	}else if (objectType === 'Boolean'){
		return datatype;
	}else if (objectType === 'Number'){
		if(datatype < 100)
		{
			return 'less than 100';	
		}else if (datatype > 100){
			return 'more than 100';
		}else{
			return 'equal to 100';
		}
	}else if (objectType === 'Array'){
		if(datatype.length < 3)
		{
			return undefined;
		}else{
			return datatype[2];
		}
	}else if (objectType === 'Function'){
		return datatype(true);
	}

}