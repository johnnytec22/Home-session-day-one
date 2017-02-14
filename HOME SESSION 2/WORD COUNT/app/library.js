
var exports = module.exports = {};


exports.words = function(str){
  var obj={};
  str.split(/[\s,]+/).forEach(function(i){
    obj[i]  =  (+obj[i] || 0) + 1;
  });
  return obj;
}


