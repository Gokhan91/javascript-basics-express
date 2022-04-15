const getNthElement = (index, array) => {
  const newindex = index % array.length;
  if (index < array.length) return array[index];
  return array[newindex];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const arr1 = [...array, element];
  return arr1;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  const allToString = numbers.map(numbers => {
    return numbers.toString();
  });
  return allToString;
};

const uppercaseWordsInArray = strings => {
  const UpperCase = strings.map(strings => {
    return strings.toUpperCase();
  });
  return UpperCase;
};

const reverseWordsInArray = strings => {
  const reversed = strings.map(strings => {
    return strings
      .split('')
      .reverse()
      .join('');
  });
  return reversed;
};

const onlyEven = numbers => {
  const evens = numbers.filter(numbers => numbers % 2 == 0);
  return evens;
};

const removeNthElement2 = (index, array) => {
  const arr2 = [...array];
  arr2.splice(index, 1);
  return arr2;
};

const elementsStartingWithAVowel = strings => {
  const vowels = strings.filter(strings => /^[aeiou]/i.test(strings));
  return vowels;
};

const removeSpaces = string => {
  const nospace = string.replace(/\s+/g, '');
  return nospace;
};

const sumNumbers = numbers => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
