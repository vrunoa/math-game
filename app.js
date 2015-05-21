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
  // console.log(result);
  return vec == 66 ? true : false;
}

function doTest() {
  var vec = [];
  var els = getA();
  function back2normal(el) {
    setTimeout(function(){ el.style.border = "1px solid #ccc"; }, 2000);
  }

  for(var i=0; i<els.length;i++) {
    var el = els[i];
    if(!parseInt(el.value)) {
      el.style.border = "1px solid red";
      back2normal(el);
      return;
    }
    vec.push(el.value);
  }
  if(test(vec)) {
    alert("Yeah! You complete the puzzle!")
  }else{
    alert("You failed! You're a disgrace for this family :(");
  }
}

function doClear(){
  var els = getA();
  for(var i=0;i<els.length;i++) {
    els[i].value= "";
  }
}

function getA() {
  var els = [];
  for(var i=0;i<9;i++) {
    els.push(document.getElementsByName("a["+i+"]")[0]);    
  }
  console.log(els);
  return els;
}

// trying to resolve the puzzle via permutations, but it takes to long.
function perms(data) {
  if (!(data instanceof Array)) {
    throw new TypeError("input data must be an Array");
  }

  data = data.slice();  // make a copy
  var permutations = [],
    stack = [];

  function doPerm() {
    if (data.length == 0) {
      permutations.push(stack.slice());
    }
    for (var i = 0; i < data.length; i++) {
      var x = data.splice(i, 1);
      stack.push(x);
      setTimeout(function() { 
        doPerm(); 
      }, 10);
      stack.pop();
      data.splice(i, 0, x);
    }
  }

  doPerm();
  return permutations;
}

function resolve() {

  var input = "123456789".split('');
  var result = perms(input);
  for (var i = 0; i < result.length; i++) {
    var possible = result[i].join('').split('');
    if(test(possible)) {
      console.log("Solved: "+possible);
      return;
    }
  }
}

// resolve();

