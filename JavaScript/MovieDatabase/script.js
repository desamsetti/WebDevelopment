var movie = [
	{
		title:"In Bruges",
		rating:"5 stars",
		hasWatched:true
	},
	{
		title:"Frozen",
		rating:"4.5 stars",
		hasWatched:false
	},
	{
		title:"Mad Max Fury Road",
		rating:"5 stars",
		hasWatched:true
	},
	{
		title:"Les Miserables",
		rating:"3.5 stars",
		hasWatched:false
	}
]

for(var i=0;i<movie.length;i++)
{
	if(movie[i].hasWatched==true)
	{
		console.log("You have watched "+"\""+movie[i].title+"\""+" - "+movie[i].rating);
	}
	else
	{
		console.log("You have not watched "+"\""+movie[i].title+"\""+" - "+movie[i].rating);
	}
}
