function getCounter(num1, num2) {
    let currentNum = num1;

    const interval = setInterval(() => {
        if (currentNum <= num2) {
            console.log(currentNum);
            currentNum++;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

getCounter(5, 15);