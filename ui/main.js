//console.log('Loaded!');
var b = document.getElementById('b1');
var c = 0;
b.onclick = function(){
    c=c+1;
    var span=document.getElementById('count');
    span.innerHTML=c.toString();
    alert(c.toString());
};