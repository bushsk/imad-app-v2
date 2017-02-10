//console.log('Loaded!');
var b = document.getElementById('b1');
var c = 0;
b.onclick = function(){
    c=c+1;
    var span=document.getElementById('count');
    span.innerHTML=c.toString();
    alert(c.toString());
};

var nameInput=document.getElementById('name');
var n=nameInput.value;
var submit=document.getElementById('submit');
submit.onClick = function(){
    var names=['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i<names.length;i++)
    list+='<li>'+names[i]+'</li>';
    var ul=document.getElementById('list');
    ul.innerHTML=list;
};