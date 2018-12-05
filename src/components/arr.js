var arr = [1, [2, [3, 4]]];

function flatten(arr){
  let result = [];
  for( let i = 0, len = arr.length; i < len; i++){
    if(Array.isArray(arr[i])){
      result = result.concat(flatten(arr[i]))
    }else{
      result.push(arr[i])
    }
  }
}
