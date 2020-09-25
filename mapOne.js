const arr = [1,2,3,4,5];


//Return an arr with all of the values from arr doubled - Use Map
//i.e. [2,4,6,8,10]

//Write function to multiply input by two
const multiplyByTwo = (element) => {
  return element * 2;
}

//use that function in map
const newArr = arr.map(multiplyByTwo)

//Our Expectation
const expectedResult = [2,4,6,8,10]

//Our tests
//Tests that the returned array is correct
console.assert(JSON.stringify(newArr) === JSON.stringify(expectedResult), `Expected: ${expectedResult}, Actual: ${newArr}`)

//Tests that the original array was not mutated
console.assert(arr !== newArr, `Do not mutate the original array`)

console.log('Original Array - ', arr)
console.log('New Array - ', newArr)