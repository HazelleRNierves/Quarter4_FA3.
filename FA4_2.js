let lists =[]

function nameAdd()
{
	const input = document.getElementById("enterName");
	const name = input.value.trim();
	if(name !==" ")
	{
		if(lists.length >=7)
		{
			lists.shift();
		}
		lists.push(name);
		input.value=" ";
		displayLists();
	}
	
}
	function nameRemove()
{
	lists.pop();		
	displayLists();
}

	function displayLists()
{
	document.getElementById("nameOutput").textContent=lists.join(" ");
}