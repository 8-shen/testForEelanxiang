function isNumber(obj) {  
  return typeof obj === 'number' && !isNaN(obj)  
}

function isParallelogram(points = []){
  if(points.length !== 4){
    return false;
  }
  const xs = {};
  const ys = {};
  for(let i = 0; i<points.length; i++){
    const point = points[i];
    if(!isNumber(point['x']) || !isNumber(point['y'])){
      return false
    }
    if(!xs[point.x]){
      xs[point.x] = [point]
    }else{
      xs[point.x].push(point);
    }
    if(!ys[point.y]){
      ys[point.y] = [point];
    }else{
      ys[point.y].push(point);
    }
  }
  if(Object.keys(xs).length === 2 && Object.keys(ys).length === 2){
    return true;
  }else{
    return false;
  }
}


module.exports = function (){
  const testCases = [
    [{x:0, y:0},{x:0, y:0},{x:0, y:0},{x:0, y:0}], //false
    [{x:1, y:1},{x:1, y:1},{x:1, y:1},{x:1, y:1}], //false
    [{x:1, y:100},{x:1, y:200},{x:70, y:100},{x:90, y:200}], //false
    [{x:1, y:100},{x:1, y:200},{x:70, y:100},{x:70, y:200}], //true
    [{x:-1, y:-100},{x:-1, y:-200},{x:-70, y:-100},{x:-70, y:-200}], //true
    [{x:-1, y:-100},{x:-1, y:-200},{x:-70, y:-100},{x:-90, y:-200}], //false
    [{x:1, y:1},{x:1, y:1},{x:1, y:1},{x:1, y:50}], //false
    [{x:1, y:1},{x:1, y:1},{x:1, y:1},{x:50, y:1}], //false
    [{x:15, y:100},{x:19, y:200},{x:70, y:100},{x:90, y:200}], //false
    [{x:1, y:25},{x:1, y:34},{x:30, y:67},{x:30, y:95}], //false
    
  ]
  testCases.forEach(item=>{
    console.log(isParallelogram(item));
  });
};

