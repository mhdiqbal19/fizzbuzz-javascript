const fizzBuzz = (angka) => {
    let arr = []
    for (let i = 1; i <= angka; i++){
        if (i % 3 == 0 && i % 5 == 0) {
            arr.push("FizzBuzz");
        }else if (0 == i % 3) {
            arr.push("Fizz");
        }else if (0 == i % 5) {
            arr.push("Buzz");
        }else{
            arr.push(i);
        }
    }
    return arr
}
console.log(fizzBuzz(15));
