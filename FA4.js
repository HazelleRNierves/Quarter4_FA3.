function makeShape() 
{
  let num;
  let numError = document.getElementById("error");
  numError.style.display="none";

  while(true)
  {
    num=parseInt(document.getElementById("numberInput").value);
    if(!isNaN(num))
    {
      break;
    }
    
    numError.textContent = "Invalid input. Please enter a number.";
    numError.style.display ="block";
    return;
  }
  
  let resultDiv = document.getElementById("output")
  resultDiv.innerHTML = "Number inputted:"+num+"<br>";
  
  if(num%2 !=0)
  {
    for(let i=num;i>0;i--)
      resultDiv.innerHTML += (i.toString().repeat(num))+"<br>";

  }

  else
  {
    for(let i=num; i>0; i--)
      resultDiv.innerHTML += (i.toString().repeat(i))+"<br>";

  }
}