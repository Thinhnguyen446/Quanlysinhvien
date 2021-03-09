let inputNumber = parseInt(prompt("please enter number"));
let s = 0;
function sum()
{
	for(let i = 1;i< inputNumber + 1;i++)
  {
  	s = s + i;
  }
}
sum();
function print()
{
	console.log(s)
}
print();