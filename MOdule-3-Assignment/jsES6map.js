function doubleNumbers(numbersArray) {
    const doubledArray = numbersArray.map(number => number * 2);
    return doubledArray;
  }
  

  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = doubleNumbers(numbers);
  console.log(doubledNumbers);