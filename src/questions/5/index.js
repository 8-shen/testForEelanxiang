function counter(arr, index, count){
  const _index = arr[index] + index;
  if(index === _index && count !== 0){ //不是第一次递归，且索引没变，取下一个，不计步数
    return counter(arr, _index + 1, count);
  }else if(_index >= arr.length){
    return count;
  }else if(_index === arr.length - 1 && arr[_index] === 0){ //如果当前是最后一个元素，且最后一个元素是0，直接结束
    return count + 1;
  }else{
    return counter(arr, _index, ++count);
  }
}

function stepCounter(arr = []){
  let count = 0, index = 0;
  return counter(arr, index, count);
}


module.exports = function(){
  const testCases = [
    [1, 2, 3, 1],
    [2,3,0,1,0],
    [3,2,0,2,3,2,1,1]
  ];
  testCases.forEach(item=>{
    console.log(stepCounter(item));
  });
};