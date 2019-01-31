var input = prompt("Are we there yet?");
//while(input !== "yeah" && input !== "Yeah" && input !== "yes" && input !== "Yes")
//Annoyomatic v2
while(input.indexOf("yes")===-1)
{
	input = prompt("Are we there yet?");
}
alert("Yay! We made it");
/*if(input==="yes")
{
alert("Yay! We made it");
}*/