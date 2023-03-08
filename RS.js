const hello = (i,j) =>{
  
let k = i;
i = j;
k = k;
}

let i = 0;
let j = 1;

console.log("calling");
hello(i,j);

console.log("done");
