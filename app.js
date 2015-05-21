function test(arr) {
  if(arr.length != 9) return false;
  
  var vec = [
    ,"+",13,"*",,"/",
    ,"+",,"+",12,"*",,
    "-",,"-",11,"+",,
    "*",,"/",,"-",10
  ];
  var fillBlank = function(num){
    for(var k=0; k< vec.length;k++) {
      if(vec[k] == undefined) {
        vec[k] = num;
        return;
      }
    }
  }
  for(var i in arr) {
     fillBlank(arr[i]);
  }
  var result = eval(vec.join(''));
  return vec == 66 ? true : false;
}
function resolve() {

}

