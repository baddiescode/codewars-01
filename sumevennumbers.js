// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

function sumEvenNumbers(input) {
    let arr = Array.from(input)
    console.log(arr)
    let sum = arr.reduce((acc,c) => acc + (c%2===0 ? c : 0),0)
    return sum
  }