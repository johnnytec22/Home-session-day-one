

//function to check if a number is in an array:
function isInArray(searchArray, valueToSearch)
{
	for (i = 0; i < searchArray.length; i++)
	{
		if (searchArray[i] === valueToSearch)
		{
			return true;
		}
	}
	return false;
}



var exports = module.exports = {};

exports.findMissing = function(arrayA, arrayB)
{
	if (arrayB.length === 0 && arrayA.length === 0)
	{
		return 0;
	}

	for (var i = 0; i < arrayB.length; i++)
	{
		if (!(isInArray(arrayA, arrayB[i])))
		{
			return arrayB[i];
		}
    }

    return 0;
    
}



