const btn = document.getElementById("enterBtn");
const container = document.getElementById("status");

btn.addEventListener("click", () => {
  const h1 = document.createElement("h1");
  h1.textContent = "Entered Metaverse";

  container.innerHTML = "";        // Clear the container
  container.appendChild(h1);       // Add the new <h1> inside the container
});
