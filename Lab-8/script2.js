var a = 1
function b() { 
    a = 10; 
    return; 
    function a() {} 
   
} 

b(); 
window.a = 10;
console.log(a);
