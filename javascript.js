var button = document.getElementById("enter");
var user_input = document.getElementById("input");
var ul = document.querySelector("ul");

button.addEventListener("click",function () {
	if(user_input.value.length > 0){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(user_input.value));
		ul.appendChild(li);
		user_input.value = "";
	}
	
})

user_input.addEventListener("keypress",function (event) {
	if(user_input.value.length > 0 && event.which=== 13){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(user_input.value));
		ul.appendChild(li);
		user_input.value = "";
	}
	
})