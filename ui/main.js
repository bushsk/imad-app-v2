console.log('Loaded!');
var b=document.getElementById('b1');
var c=0;
b.onClick= function(){
    c=c+1;
    var span=document.getElementById('count');
    span.innerHTML=c.toString();
}