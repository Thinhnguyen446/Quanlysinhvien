let inputNumber = Number(prompt('please enter number'));
let s = 0;
function sum()
{
	for(let i = 1;i < inputNumber + 1;i++)
  {
  	if(i % 2 != 0 )
    {
    	s = s + i;
    }
  }
}
sum();
function print()
{
	console.log(s);
}
print();