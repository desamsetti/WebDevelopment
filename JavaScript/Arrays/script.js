function printReverse(inputArray)
{
	for(var i=inputArray.length-1;i>=0;i--)
	{
		console.log(inputArray[i]);
	}
}

/*function isUniform(inputArray)
{
	for(var i=0;i<inputArray.length;i++)
	{
		for(var j=0;j<inputArray.length;j++)
		{
			if(inputArray[i]!==inputArray[j])
			{
				return false;
			}
		}
	}
	return true;
}*/

function isUniform(inputArray)
{
	var firstElement = inputArray[0];
	for(var i=0;i<inputArray.length;i++)
	{
		if(inputArray[i]!==firstElement)
		{
			return false;
		}
	}
	return true;
}


function sumArray(inputArray)
{
	var sum = 0;
	for(var i=0;i<inputArray.length;i++)
	{
		sum +=inputArray[i];
	}
	return sum;
}


function max(inputArray)
{
	var max = inputArray[0];
	for(var i = 1;i<inputArray.length;i++)
	{
		if(inputArray[i]>max)
		{
			max = inputArray[i];
		}
	}
	return max;
}

printReverse([1,2,3,4,5,6]);

isUniform([1,1,1,1,1]);

sumArray([1,2,3,4,5]);

console.log(max([1,2,3,4,5,6,78,9,10]));