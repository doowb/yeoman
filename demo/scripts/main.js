require(["../es5/es6/mathstuff"], function(mathstuff) {
    console.log(mathstuff);
    console.log(math);
    console.log(math.sum(5,6));

    // So.. good news: we can consume functionality from the
    // converted modules
    // bad news: these modules are of course not AMD and
    // are leaking into the global namespace. Might have to fall back to 
    // HM
});
