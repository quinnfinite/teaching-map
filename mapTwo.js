var arr = [2, 6, 78, 101, 4, 34]

//Using map, return an array where each element is a boolean indicating if it's greater than 34
//Expect: [ false, false, true, true, false, false ]


//Step 1
//Write a function that checks if a value is greater than 34

var greaterThanThirtyFour = (element) => {
  return element > 34
}

//Step 2
//use map to run that function over each element
//And assign the return value of map to a variable
var newArr = arr.map(greaterThanThirtyFour)




//Could also be written as such
// var newArr = arr.map((element)=>{
//   return element > 34
// });

console.log(newArr)
