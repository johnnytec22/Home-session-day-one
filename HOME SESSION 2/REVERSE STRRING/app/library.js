
var exports = module.exports = {};

exports.reverseString = function(aString)
{
	if (aString.length == 0)
	{
		return null;
	}

	var reversedString = aString.split('').reverse().join('');

	if(reversedString == aString)
	{
		return true;
	}else{
		return reversedString;
	}
}