let items = ["T-shirt", "Sweater"]

console.log("Wellcome to our shop")
//do
//{
		let a = prompt("what do you want (C, R, U, D)?"); 
  	if(a == "R")
		{
			console.log(items);	
		}
		else if(a == "C")
		{
			let b = prompt("please enter name")
			items.push(`${b}`);
  		console.log(items);
		}
  if(a == "U")
  {
    let s = Number(prompt("please enter number"));
    let q = prompt("please enter name");
    items[s] = `${q}`;
    console.log(items);
  }
  else if(a == "D")
  {
    let t = Number(prompt("please enter number"));
    items.splice(t,1);
    console.log(items);
  }
  else
  	console.log("good bye")
//}while(a == "U"|| a == "D"|| a == "C"|| a == "R")


		
