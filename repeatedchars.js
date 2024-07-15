function numofrep(str){
    const y = str.split();
    let rep = 0;
    let i = 0;
    let j = 0
    for(i = 0; i < y.length; i = i+ 1){
        rep = check(i, y)
        console.log("{ " + y[i] + ":" + rep);
        rep = 0;
    }
}

function check(i, y){
    let j = 0;
    let rep = 0;
    for(j = 0; j < y.length; j = j + 1){
            if(i == j){
                continue;
            }
            else if(y[i] == y[j]){
                rep += 1;
            }
            console.log("work");
        }
    return rep;
}

let str = prompt();
numofrep(str);
