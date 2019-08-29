document.body.style.backgroundColor = "crimson";
var data = [];
function addtodo(event){
	if(event.keyCode == 13){
	let itemData = {checked:false,
					todotext: event.target.value
			    	};
	data.push(itemData);
	display()
	}
}
function display(){
	var ul = document.querySelector("ul");
	ul.innerHTML = "";
	data.forEach((e,i) =>{
		var li = document.createElement("li");
		li.dataset.id = i;
		var check = document.createElement("input");
		check.type = "checkbox";
		var p = document.createElement("p");
		p.textContent = e.todotext;
		// for (let key in data){
		// p.textContent = data[key];
		// }
		var del = document.createElement("button");
		del.innerText = "x";
		ul.appendChild(li);
		li.appendChild(check);
		li.appendChild(p);
		li.appendChild(del);
		document.querySelector("input").value = "";
	})
}

document.querySelector("input").addEventListener("keyup",addtodo)