function sum (number) {
    let newNumber = 0;
    return function() {
        let argument = arguments[0] ? arguments[0] : 0;
        return newNumber += argument;
    };
}

const getSum = sum();
