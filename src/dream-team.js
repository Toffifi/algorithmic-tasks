module.exports = function createDreamTeam(members) {
  const arr = [];
  if(Array.isArray(members)){
    for (const i of members) {
      if(typeof(i) == 'string'){
        arr.push(i.trim().substring(0, 1).toUpperCase())
      }
    }
  }
  return arr.sort().join('');
};