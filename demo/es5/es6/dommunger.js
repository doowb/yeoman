var DOMMunger =(function() { 
  "use strict"; 
  Object.defineProperty(this, "make", { 
    get: function() { 
      return make; 
    }, 
    enumerable: true 
  }); 
  Object.freeze(this); 
  function make(domAPI) { 
    return { munge: function(doc) { 
        domAPI.alert('hi!'); 
      } }; 
  } 
  return this; 
}).call(Object.create(null)); 
var DOM =(function() { 
  "use strict"; 
  Object.defineProperty(this, "alert", { 
    get: function() { 
      return alert; 
    }, 
    enumerable: true 
  }); 
  Object.freeze(this); 
  function alert(msg) { 
    console.log(msg); 
  } 
  return this; 
}).call(Object.create(null)); 
