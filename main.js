document.body.style.backgroundColor = "crimson";
var data = JSON.parse(localStorage.getItem("data")) || [];
var active;
var complete;
function addtodo(event){
	if(event.keyCode == 13){
	var itemData = {checked:false,
					todotext: event.target.value
			    	}; 
	data.push(itemData);
	localStorage.setItem('data',JSON.stringify(data));
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
		check.checked = e.checked;
		check.dataset.checkid = i;
		check.type = "checkbox";
		var p = document.createElement("p");
		p.textContent = e.todotext;
		var del = document.createElement("button");
		del.dataset.delid = i;
		del.innerText = "x";
		ul.appendChild(li);
		li.appendChild(check);
		li.appendChild(p);
		li.appendChild(del);
		document.querySelector("input").value = "";
		activetodo();
		completetodo();
	});

}


// checkced false or true


function checkchange(event){
		if (event.target.dataset.checkid) {
		data[event.target.dataset.checkid].checked= !data[event.target.dataset.checkid].checked;
		}
		display()
}

document.querySelector("ul").addEventListener("click",checkchange);


// delete button

function deletetodo(event){
		if (event.target.dataset.delid) {
		data.splice(event.target.dataset.delid, 1);
		display();
		}
}
document.querySelector("ul").addEventListener("click",deletetodo)



// showing active items left
function activetodo(){
	active = data.filter(function(items,i){
		return items.checked == false;
		
	});
	document.getElementById("itemsLeft").innerText = active.length;
}


// showing active items
function activedisplay(){
	var ul = document.querySelector("ul");
	ul.innerHTML = "";
	active.forEach((e,i) =>{
		var li = document.createElement("li");
		li.dataset.id = i;
		var check = document.createElement("input");
		check.dataset.checkid = i;
		check.type = "checkbox";
		var p = document.createElement("p");
		p.textContent = e.todotext;
		var del = document.createElement("button");
		del.dataset.delid = i;
		del.innerText = "x";
		ul.appendChild(li);
		li.appendChild(check);
		li.appendChild(p);
		li.appendChild(del);
		document.querySelector("input").value = "";
	});

}

document.getElementById("allactive").addEventListener("click",activedisplay)




// completed

function completetodo(){
	console.log("hi");
	complete = data.filter(function(items,index){
		return items.checked == true;
		
	});
	document.getElementById("itemsLeft").innerText = active.length;
}


// showing completed items
function completedisplay(){
	var ul = document.querySelector("ul");
	ul.innerHTML = "";
	complete.forEach((e,i) =>{
		var li = document.createElement("li");
		li.dataset.id = i;
		var check = document.createElement("input");
		check.dataset.checkid = i;
		check.type = "checkbox";
		var p = document.createElement("p");
		p.textContent = e.todotext;
		var del = document.createElement("button");
		del.dataset.delid = i;
		del.innerText = "x";
		ul.appendChild(li);
		li.appendChild(check);
		li.appendChild(p);
		li.appendChild(del);
		document.querySelector("input").value = "";
	});

}

document.getElementById("completed").addEventListener("click",completedisplay)









document.getElementById("all").addEventListener("click",display)

document.querySelector("input").addEventListener("keyup",addtodo)