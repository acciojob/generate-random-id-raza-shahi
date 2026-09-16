function makeid(l) {
  // write your code here
	 let alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let res = "";
  for(let i=1;i<=l;i++){
    let random = Math.floor(Math.random()*alphanumeric.length)
    res += alphanumeric[random]
  }
  return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
