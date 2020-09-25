var arr = [1, 4]

//Use map to return an array with each element equal to the calling array

var newArr = arr.map((elem, index, callingArr) => {
  return callingArr
})

console.log(newArr)