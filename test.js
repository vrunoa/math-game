var assert = require('better-assert');
var fs = require('fs');
var vm = require('vm');
var includeInThisContext = function(path) {
    var code = fs.readFileSync(path);
    vm.runInThisContext(code, path);
}.bind(this);
includeInThisContext(__dirname+"/app.js");

describe('Math game', function(){
  it('should create the correct math', function(){
    assert(buildMath([1,2,3,4,5,6,7,8,9]), "1+13*2/3+4+12*5-6-11+7*8/9-10");
  });
});
