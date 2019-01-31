var input = prompt("Are we there yet?");
while(input !== "yeah" && input !== "Yeah" && input !== "yes" && input !== "Yes")
{
	input = prompt("Are we there yet?");
}
alert("Yay! We made it");
/*if(input==="yes")
{
alert("Yay! We made it");
}*/