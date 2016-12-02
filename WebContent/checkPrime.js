document.getElementById("b1").onclick=checkPrime;

function checkPrime(){
	var x=document.getElementById("t1").value;


	if(x%2==0)
		{
	      document.getElementById("d1").innerHTML="Even no";
		}
	else
		{
		  document.getElementById("d1").innerHTML="Not even  no";
		}
	
}
