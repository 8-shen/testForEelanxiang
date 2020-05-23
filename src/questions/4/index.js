const STATE_MAP = {
  alpha:1,
  beta:2,
  rc:3
};

function flattenVersion(version){
  let [ versionInfo, stateInfo ] = version.split('-');
  versionInfo = versionInfo ? versionInfo.split('.') : [];
  stateInfo = stateInfo ? stateInfo.split('.') : [];
  const [ major, minor, patch ] = versionInfo;
  const [ state, stateNumber ] = stateInfo;
  return {
    major,
    minor,
    patch,
    state: STATE_MAP[state],
    stateNumber
  };
}

function compareVersion(v1='',v2=''){
  v1 = flattenVersion(v1);
  v2 = flattenVersion(v2);
  const keys = ['major', 'minor', 'patch', 'state', 'stateNumber'];
  for(let i = 0; i<keys.length; i++){
    const key = keys[i];
    let resp = null;
    if(key === 'state'){
      resp = (v1[key] === undefined ? 1000 : v1[key])*1 - (v2[key] === undefined ? 1000 : v2[key])*1
    }else{
      resp = (v1[key] === undefined ? -1 : v1[key])*1 - (v2[key] === undefined ? -1 : v2[key])*1
    }
    if(resp === 0){
      continue;
    }else{
      return resp>0 ? 'v1>v2': 'v2>v1';
    }
  }
  return 'the same version';
}



module.exports = function(){
  const testCases = [
    {v1: '1.5.3', v2: '1.5.4'}, //v2>v1
    {v1: '1.6.0', v2:'2.6.0'}, //v2>v1
    {v1: '2.6.0', v2:'2.6.0-alpha'}, //v1>v2
    {v1: '2.6.0-alpha.2', v2:'2.6.0-alpha.1'}, //v1>v2
    {v1: '2.6.0-alpha.0', v2:'2.6.0-alpha.0'}, //the same version
    {v1: '2.6.0-beta.1', v2: '2.6.0-rc.0'} //v2>v1
  ]

  testCases.forEach(item=>{
    console.log(compareVersion(item.v1, item.v2))
  });
};