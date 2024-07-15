let arr = [];
let curele = 0;
let greatele = 0;
let i = 0;
let size = Number(prompt());

for(i = 0; i < size; i+=1){
    arr.push(prompt());
}
for(let j = 0; j < size; j += 1){
    curele = arr[j];
    if(curele > greatele){
        greatele = curele;
    }
}
console.log("largest element = " + greatele);
