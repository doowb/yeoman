var widgets =(function() { 
  "use strict"; 
  Object.defineProperty(this, "button", { 
    get: function() { 
      return button; 
    }, 
    enumerable: true 
  }); 
  Object.defineProperty(this, "alert", { 
    get: function() { 
      return alert; 
    }, 
    enumerable: true 
  }); 
  Object.defineProperty(this, "textarea", { 
    get: function() { 
      return textarea; 
    }, 
    enumerable: true 
  }); 
  Object.freeze(this); 
  var button =(function() { 
    "use strict"; 
    Object.freeze(this); 
    return this; 
  }).call(Object.create(null)); 
  var alert =(function() { 
    "use strict"; 
    Object.freeze(this); 
    return this; 
  }).call(Object.create(null)); 
  var textarea =(function() { 
    "use strict"; 
    Object.freeze(this); 
    return this; 
  }).call(Object.create(null)); 
  return this; 
}).call(Object.create(null)); 
