let a = Number(prompt("please enter number"));
let b = Number(prompt("please enter number"));
let c = Number(prompt("please enter number"));
let del,n1,n2,n3;
function delta(first,second,third)
{
	del = second * second - 4 * first * third; 
}
delta(a,b,c)
function tinh()
{
	if(del < 0)
  	return 0;
  if(del == 0)
  {
  	n1 = (-b)/(2 * a);
    return 1;
  }
  if(del > 0)
  {
  	n2 = (-b - Math.sqrt(del))/(2 * a);
    n3 = (-b + Math.sqrt(del))/(2 * a);
    return 2;
  }
}
//tinh();
function print(t)
{
	if(t == 0)
  	console.log("phuong trinh vo nghiem")
  if(t == 1)
  	console.log("phuong trinh co nghiem kep x1 = x2 =" + n1)
  if(t == 2 )
  	console.log("phuong trinh co 2 nghiem phan biet " + n2 + " " + n3)
}
print(tinh());

