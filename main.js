document.body.style.backgroundColor = "crimson";
function addtodo(event){
	if(event.keyCode == 13){
	let itemData = {checked:false,
					todotext: event.target.value
			    	};
		if(localStroage.getItem("itemData")==null){
		var data =[]; 
		data.push(itemData);
		localStorage.SetItem('data',JSON.stringyfy(data));
		}else{
		var myTask = localStorage.getItem('data',JSON.parse(data)); 
		myTask.push(data);
		localStorage.SetItem('data',JSON.stringyfy(mytask));
		}
	display()
	}
}
function display(){
	data = JSON.parse(localStorage.getItem("data"));
	var ul = document.querySelector("ul");
	ul.innerHTML = "";
	data.forEach((e,i) =>{
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
function checkchange(event){
		if (event.target.dataset.checkid) {
		data[event.target.dataset.checkid].checked= !data[event.target.dataset.checkid].checked;
		}
}
document.querySelector("ul").addEventListener("click",checkchange)
function deletetodo(event){
		if (event.target.dataset.delid) {
		data.splice(event.target.dataset.delid, 1);
		display();
		}
}
document.querySelector("ul").addEventListener("click",deletetodo)
document.querySelector("input").addEventListener("keyup",addtodo)