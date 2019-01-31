var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit")
{
	if(input === "list"){
		listTodos();		
	}
	else if(input === "new")
	{
		addTodo();
	}
	else if(input === "delete")
	{
		deleteTodo();
	}
	input = prompt("What would you like to do?");
}

function addTodo()
{
	var answer = prompt("Enter a new Todo");
	todos.push(answer);
	console.log("Added Todo");
}


function listTodos()
{
	console.log("**********");
	todos.forEach(function(todo,i){			
	console.log(i+": "+todo);			
	});
	console.log("**********");
}

function deleteTodo()
{
	var index = prompt("Enter index of todo to delete");
	todos.splice(index,1);
	console.log("Deleted Todo");
}