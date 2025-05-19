//your JS code here. If required.
const pt = document.getElementById("status");
const btn = document.getElementById("enterBtn");

btn.addEventListener("click",() => {
	const ele = document.createElement("h1");
	ele.textContent = "Entered Metaverse";
	ele.setAttribute("id", "status");
	pt.replaceWith(ele);
	
})