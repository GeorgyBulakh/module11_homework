function nestedFunction(a) {
    return function(b) {
        return a + b;
    }
}

const resultFunc = nestedFunction(2);

console.log(resultFunc(5));


// const sumFunc = a => b => a + b;

// console.log(sumFunc(2)(5));