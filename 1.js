function getCountOfDataType(arr){
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;
    let stringCount = 0;
    let booleanCount = 0;
    let nullCount = 0;
    let undefinedCount = 0;
    
    arr.forEach((el) => {
        if (typeof el === 'string') {
            stringCount++;
        } else if (typeof el === 'boolean') {
            booleanCount++;
        } else if (typeof el === 'object') {
            nullCount++;
        } else if (typeof el === 'undefined') {
            undefinedCount++;
        } else if (el === 0) {
            zeroCount++;
        } else if (el % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    });
    
    console.log(`Количество чётных элементов в массиве: ${evenCount}`);
    console.log(`Количество нечётных элементов в массиве: ${oddCount}`);
    console.log(`Количество нулевых элементов в массиве: ${zeroCount}`);
    console.log(`Количество строковых элементов в массиве: ${stringCount}`);
    console.log(`Количество булевых элементов в массиве: ${booleanCount}`);
    console.log(`Количество null элементов в массиве: ${nullCount}`);
    console.log(`Количество undefined элементов в массиве: ${undefinedCount}`);
}

const array = [1, 44, 3, 'fjjd', false, 20, null, undefined, 0, 4, 99, 0, true, 'string'];
getCountOfDataType(array);
