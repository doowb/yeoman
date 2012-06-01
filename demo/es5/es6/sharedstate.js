var counter =(function() { 
  "use strict"; 
  Object.defineProperty(this, "increment", { 
    get: function() { 
      return increment; 
    }, 
    enumerable: true 
  }); 
  Object.defineProperty(this, "current", { 
    get: function() { 
      return current; 
    }, 
    enumerable: true 
  }); 
  Object.freeze(this); 
  var n = 0; 
  function increment() { 
    return n ++; 
  } 
  function current() { 
    return n; 
  } 
  return this; 
}).call(Object.create(null)); 
