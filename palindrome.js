function palindrome(y){
    z = y.split();
    a = z.reverse();
    if(z == a){
        console.log("palindrome");
    }
    else{
        console.log("not palindrome");
    }
}


let x = prompt();
palindrome(x);
