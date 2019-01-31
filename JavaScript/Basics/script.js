//alert("Hello from the JS File!")
/*var userName = prompt("What is your name?");
var lastName = prompt("What is your last name?");
var age = prompt("What is your age?");

alert("Nice to meet you, "+userName+" "+lastName+" \n"+"The age is :"+age);
alert(age*365);
//console.log("Also great to meet you, "+userName);
console.log("Your full name is "+userName + " "+ lastName);
console.log("You are "+age+" years old");
*/
var age = prompt("What is your age?");

if(age<0)
{
	alert("Error");
	//console.log("Error");
}
else if(age==21)
{
	alert("Happy 21st Birthday");
	//console.log("Happy 21st Birthday");
}
else if(age%Math.sqrt(age)==0)
{
	alert("Perfect Square");
}
else if(age%2==1)
{
	alert("Your age is odd");
	//console.log("your age is odd");
}
else
{
	alert("Age is "+age);
	//print("Age is "+age);
}

