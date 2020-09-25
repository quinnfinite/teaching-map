var arr = [2, 6, 78, 101, 4, 34]

//Using map, return an array where each element is a boolean indicating if it's greater than 34


var newArr = arr.map((element)=>{
  return element > 34
})

console.log(newArr)
