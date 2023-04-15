function first(){
    second();
    console.log('1');
}

function second(){
    third();
    console.log('2');
}

function third(){
    console.log('3');
}

first();