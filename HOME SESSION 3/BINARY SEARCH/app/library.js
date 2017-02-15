

module.exports = [].prototype



Array.prototype.toTwenty = function()
{
	var list = []; 

	for (i = 1; i <= 20; i++)
	{
		list.push(i);
	}

	return list
}


Array.prototype.toForty = function()
{
	var list = [];
	var i = 2;
	
	while (i <= 40)
	{
		list.push(i);
		i += 2;
	}

	return list;
}


Array.prototype.toOneThousand = function()
{
	var list = [];
	var i = 10;

	while ( i <= 1000)
	{
		list.push(i);
		i += 10;
	}

	return list;
}




Array.prototype.search = function(numberToFind) {
    var lowestIndex = 0;
    var highestIndex = this.length - 1;
    var midPoint;
    var count = 0;

    var returnObject = {};


    while (lowestIndex <= highestIndex)
    {
    	
        midPoint = Math.floor((lowestIndex + highestIndex) / 2);

        if (this[midPoint] === numberToFind)
        {
        	
        	returnObject['index'] = midPoint;
        	returnObject['count'] = count;
        	returnObject['length'] = this.length;
            return returnObject;
        }
        else if (this[midPoint] < numberToFind)
        {
            lowestIndex = midPoint + 1;
            continue;
        }
        else if (this[midPoint] > numberToFind)
        {
            highestIndex = midPoint - 1;
            continue;
        }

        count += 1;
        

    }
    
    returnObject['index'] = -1;
    returnObject['count'] = count;
    returnObject['length'] = this.length;
    return returnObject;;
};
