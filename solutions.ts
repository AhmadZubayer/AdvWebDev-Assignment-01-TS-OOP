// PROBLEM 1
const filterEvenNumbers = (numArr: number[]) => {
    return numArr.filter((num) => num % 2 ===0 );
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// PROBLEM 2
const reverseString = (str: string) => {
    let reverseStr : string = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr;
}
console.log(reverseString("typescript"));

// PROBLEM 3
