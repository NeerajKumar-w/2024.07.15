let size = Number(prompt());
let arr = [];
for(let i = 0; i < size; i += 1){
    arr.push(Number(prompt()));
}
for(let i = 1; i < size; i += 1){
    if(arr[i] = arr[i - 1] + 1){
        continue;
    }
    else{
        console.log("missing" + arr[i] - 1);
    }
}
