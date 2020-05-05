function multiply() {  
    var length = arguments.length;
    var total =1;
   if(length>0) {
         for(var i = 0; i<length; i+=1){
            total = total * arguments[i];
        }
         return console.log(total);
    }
   console.log(0);
}

function once(func) {
   return function() {
       var f = func;
       func = null;
       console.log(arguments)
       return f.apply(this,arguments);
   };
}

var multiply_once = once(multiply); 
multiply_once(3,4);  // 12





