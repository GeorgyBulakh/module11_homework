function isPrimeNumber(num) {
    if (num === 0 || num === 1) {
        return alert('Не является простым числом');
    }
    
    if (num < 2 || num > 1000) {
        return alert('Данные неверны');
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return alert('Не является простым числом');
        }
    }
    return alert('Простое число');
}

isPrimeNumber(-3)