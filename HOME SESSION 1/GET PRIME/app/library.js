//asymtotic notation: O(n**2) in worst case

var exports = module.exports = {};

exports.getPrimes = function(primeRangeMax)
{

	listOfPrimes = [];

	if(isNaN(primeRangeMax) || primeRangeMax <= 0)
	{
		return 'Invalid Input';
	}

	
	for (var x = 0; x <= primeRangeMax; x++)
	{
		
		if (x < 2)
		{
			continue;
		}
		else if (x === 2)
		{
			listOfPrimes.push(2);

		}else{

			var isNumPrime = true;

			/*All composite numbers must have at least one factor bellow its
			  square root else the number is prime. This helps to minimize iterations
			 */
			for (i = 2; i <= Math.round((x**0.5)); i++)
			{
				/*checks for composite numbers and breaks out of the loop
				  once it is identified
				*/
				if (x % i === 0)
				{
					isNumPrime = false;
					break;
				}

			}

			if (isNumPrime)
			{
				listOfPrimes.push(x);
			}
		}	
	}

	return listOfPrimes;
}

