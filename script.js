//your JS code here. If required.
const dt = document.getElementById("status");
const btn = document.getElementById("enterBtn");

btn.addEventListener("click",() => {
	const ele = document.createElement("h1");
	ele.textContent = "Entered Metaverse";
	dt.innerHtml = "";
	dt.appendChild = ele;
	
})