function struct(arr = []){
  const result = [];
  arr.forEach((item, index)=>{
    if(typeof item === 'string' && Array.isArray(arr[index+1])){
      result.push({
        type: item,
        args:struct(arr[index+1])
      });
    }else if(typeof item === 'string'){
      result.push({
        type:item
      });
    }
  });
  return result;
}

function structTransform(str = ''){
  str = str.replace(/,/g, '","').replace(/</g, '",["');
  str = `["${str.replace(/>/g, '"]')}"]`.replace(/]",/g, '],').replace(/]"/g, ']');
  const arr = JSON.parse(str);
  const [type, args] = arr;
  return !args || args.length===0 ? { type } : { type, args:struct(args) };
}



module.exports = function(){
  const testCase = [
    'number',
    'Array<number>',
    'Array<Good<string, any>,number>'
  ];
  
  testCase.forEach(item=>{
    console.log(JSON.stringify(structTransform(item)));
  });
};