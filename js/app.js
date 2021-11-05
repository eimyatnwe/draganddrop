// UI
const picdiv = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// console.log(picdiv);
// console.log(empties);

picdiv.addEventListener("dragstart",dragstart);
picdiv.addEventListener("dragend",dragend);

// DRAG START
function dragstart(){
	console.log("drag start is working");

	// this.classList.add("hold");

	// remember to add a space before writing classname
	this.className += " hold";

	setTimeout(()=>{
		this.className = "invisible";
	},0);
}

// empties.forEach(empty=>{
// 	// console.log(empty);

// 	empty.addEventListener("dragover",dragover);
// 	empty.addEventListener("dragenter",dragenter);
// 	empty.addEventListener("dragleave",dragleave);
// 	empty.addEventListener("drop",dragdrop);


// });


// => ES6 can looping object-specific iterator valule
for(const empty of empties){
	// console.log(empty);

	empty.addEventListener("dragover",dragover);
	empty.addEventListener("dragenter",dragenter);
	empty.addEventListener("dragleave",dragleave);
	empty.addEventListener("drop",dragdrop);
	
}


// => numerable property name of an object-specific
// for(const empty in empties){
// 	console.log(empty);
// }

//DRAG END
function dragend(){
	
	console.log("drag end is working");

	this.className = "fill";
}

function dragover(e){
	// console.log("drag over");

	e.preventDefault();
}

function dragenter(e){
	// console.log("drag enter");

	e.preventDefault();

	this.className += " hovered";

	
}

function dragleave(e){
	// console.log("drag leave");

	e.preventDefault();

	this.className = "empty";
}

function dragdrop(e){
	// console.log("drag drop");

	this.className = "empty";
	this.appendChild(picdiv);
}