function compute()
{
	document.getElementById("result").innerHTML = "";

	var principal = document.getElementById("principal").value;
  
  if (principal === "")
     {alert('!! Empty Amount !! .. This have be a number');
	document.getElementById("principal").focus();
  } else if (principal == 0)

	{alert(' !! Zero Amount Number !! .. This have be greater than zero ');
	document.getElementById("principal").focus();

} else if (principal < 0)
{alert(' !! Negative Amount Number !! .. This have to be greater than zero');
document.getElementById("principal").focus();}
else {
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
document.getElementById("result").innerHTML="If you deposit <mark>" +principal+ ",</mark> \<br\>at an interest rate of <mark>"+rate+"% </mark> \<br\>You will receive an amount of <mark> "+interest+",</mark> \<br\>in the year <mark> "+year+" </mark>\<br\>"}}

 
function updateRate() 
    {   
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    }      
