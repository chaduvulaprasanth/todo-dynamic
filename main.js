document.body.style.backgroundColor = "lightgrey";
var data = [];
function addtodo(event){
if(event.keyCode == 13){
 data.push(event.target.value);
display()
}
}
function display(){
var ul = document.querySelector("ul");
var li = document.createElement("li");
var check = document.createElement("input");
check.type = "checkbox";
var p = document.createElement("p");
for (let key in data){
p.textContent = data[key];
}
var del = document.createElement("button");
del.innerText = "x";
ul.appendChild(li);
li.appendChild(check);
li.appendChild(p);
li.appendChild(del);
document.querySelector("input").value = "";
}

document.querySelector("input").addEventListener("keyup",addtodo)