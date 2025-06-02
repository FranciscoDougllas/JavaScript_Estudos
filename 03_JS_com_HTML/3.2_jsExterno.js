const h1 = document.querySelector('h1');
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    if (h1.style.color === "red") {
        h1.style.color = "black";
    } else {
        h1.style.color = "red";
    }
});