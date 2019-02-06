var toggler = false;
var button = document.querySelector("button");
button.addEventListener("click",function(){
	if(toggler)
	{
		document.body.style.background = "white";			
		button.style.background = "purple";
		toggler = false;
	}
	else
	{
		document.body.style.background = "purple";
		button.style.background = "white";
		toggler = true;		
	}
	//toggler = !toggler;
});


/*
button.addEventListener("click",function()
{
	document.body.classList.toggle("purple");
})
//HTML
.purple
{
	background : purple;
}
*/