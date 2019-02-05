var toggler = false;
var button = document.querySelector("button");
button.addEventListener("click",function(){
	console.log("Button has been clicked");
	if(toggler===true)
	{

		document.body.style.background = "purple";
		console.log(toggler);
		
		toggler = false;
		console.log("Inside IF");
	}
	else
	{
		document.body.style.background = "white";
		console.log(toggler);
		
		toggler = true;
		console.log("Inside ELSE");
	}
});