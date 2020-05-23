//这个题还有个思路可以用栈实现，但是感觉没必要
function stringTransform(arr = []){
  if(!Array.isArray(arr)){
    return {
      success: false,
      errMsg: '数据结构不对'
    }
  }
  let result = '', end = '';
  for(let i = arr.length -1;i>=0;i--){
    result += i === 0 ? `{"${arr[i]}": "${arr[i]}"` : `{"${arr[i]}": `;
    end+= '}';
  }
  result += end;
  return {
    success:true,
    data: result
  };
}



module.exports = function(){
  const testCases = [
    ['a','b','c','d','e'],
    ['a'],
    ['1','2']
  ];
  
  testCases.forEach(item=>{
    console.log(stringTransform(item));
  });
};