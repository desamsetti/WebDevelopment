function isEven(number)
{
	if(number%2===0)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function factorial(number)
{
	if(number===1 || number===0)
	{
		return 1;
	}
	else
	{
		return number*factorial(number-1);
	}
}

function kebabToSnake(sentence)
{
	var newStr = sentence.replace(/-/g,"_");
	return newStr;
}

