function countDown(number) {
    // display the number
    console.log(number);

    // decrease the number by value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}
console.log(countDown(4)); // 4, 3, 2, 1