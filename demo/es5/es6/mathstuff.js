var math =(function() { 
  "use strict"; 
  Object.defineProperty(this, "sum", { 
    get: function() { 
      return sum; 
    }, 
    enumerable: true 
  }); 
  Object.defineProperty(this, "pi", { 
    get: function() { 
      return pi; 
    }, 
    enumerable: true 
  }); 
  Object.freeze(this); 
  function sum(x, y) { 
    return x + y; 
  } 
  var pi = 3.141593; 
  return this; 
}).call(Object.create(null)); 
