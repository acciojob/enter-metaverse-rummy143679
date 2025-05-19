const btn = document.getElementById("enterBtn");
const statusElement = document.getElementById("status");

btn.addEventListener("click", () => {
  const h1 = document.createElement("h1");
  h1.textContent = "Entered Metaverse";
  h1.id = "status"; // maintain the same id
  statusElement.replaceWith(h1);
});
