let inputNumber = Number(prompt("please enter number"));
function test(a)
{
	for(let i = 2;i < inputNumber;i++)
  {
  	if(a % i == 0)
    	 return false;  
  }
}
function print(b)
{
	if(b == false)
  {
  	console.log(`${inputNumber} isn't prime`)
  }
  else 
  {
  	console.log(`${inputNumber} is prime`)
  }
}
let c = test(inputNumber);
print (c);