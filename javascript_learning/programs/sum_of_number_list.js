const sum = (...args) => {
    let sum = 0;

    for(let arg in args){
        sum += arg;
    }
    return sum;
}

console.log(Number(sum(3,4,5)));
