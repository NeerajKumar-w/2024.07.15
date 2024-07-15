let arr = [];
let i = 0;
let size = Number(prompt());

for(i = 0; i < size; i+=1){
    arr.push(prompt());
}
function great(arr){
    let a = 0;
    let b = 0;
    for(let j = 0; j < size; j += 1){
        a = arr[j];
        if(a > b){
            b = a;
        }
    }
    return b;
}
console.log("largest element = " + great(arr));
