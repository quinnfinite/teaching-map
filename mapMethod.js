const arr = [];
//Empty array
console.log(arr);
//add method to array
//method takes two arguments, a callback function, and thisArg
Array.prototype.newMap = function (callback, thisArg) {
  //create a new array to store results
  var resultsArray = [];
  //set the context of thisArg. The default should be this
  thisArg = thisArg || this;
  for (var index = 0; index < this.length; index++) {
    let newValue = callback.call(thisArg, this[index], index, this)
  resultsArray.push(newValue)
  }
  return resultsArray;
}

//check that the method is accessible
console.log(arr.newMap);

//add a value to the array
arr.push(1)
arr.push(2)
arr.push(3)

//Look at the current state of the arr - [1,2,3]
console.log(arr)

var bacon = ['bacon'];

var newArr = arr.newMap(function (element){
    // console.log('This - ', this)
    return element * 2;
}, bacon)

console.log(newArr)
