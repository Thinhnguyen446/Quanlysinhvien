let name = ['ronaldo','messi','neymar'];
console.log(name);
let n =String(prompt('do you want ...?'));
if(n == "Y")
{
	var b = Number(prompt("do you?"));
	name.splice(b,1)
  console.log(name);
}
else if(n == "N")
{
	console.log('good bye')
}