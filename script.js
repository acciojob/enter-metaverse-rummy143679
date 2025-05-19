//your JS code here. If required.
const pt = document.getElementById("status");
const btn = document.getElementById("enterBtn");
const body = document.getElementById("body");

btn.addEventListener("click",() => {
	const ele = document.createElement("h1");
	ele.textContent = "Entered Metaverse";
	elem.setAttribute("id","status");
	pt.replaceWith(ele);
	
})