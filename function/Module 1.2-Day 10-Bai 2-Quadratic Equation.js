function acheck(a)
{
	if(a == 0)
  	return false;
}

	do
  {
  	var a = Number(prompt("please enter a"));
    var b = Number(prompt("please enter b"));
    var c = Number(prompt("please enter c"));
  }while(acheck(a) == false)

function de()
{
	console.log(`${a}*x^2 + ${b}*x + ${c} = 0`)
}
function delta(n,m,t)
{
	var del = m * m - 4 * n * t;
  return del;
}

function result(v)
{
	
	if(v < 0)
  {
  	console.log("No solution")
  }
  else if(v == 0)
  {
  	var x = (- b)/(2 * a);
    console.log(`phuong trinh co nghiem kep: x1 = x2 = ${x} `)
  }
  else
  {
  	var y = (- b + Math.sqrt(v))/(2*a);
    var z = (- b - Math.sqrt(v))/(2*a);
    console.log(`phuong trinh co 2 nghiem pb:`);
    console.log(`x1 = ${y}`);
    console.log(`x2 = ${z}`); 
  } 
}
result(delta(a,b,c));
