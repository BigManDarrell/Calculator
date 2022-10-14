const text = document.getElementById("text");
const inputBtn = document.querySelectorAll(".input");
const c = document.getElementById("clear");
const del = document.getElementById("del");
const go = document.getElementById("equal");
const op = ["+", "-", "*", "/", "%"];
text.textContent = 0;

inputBtn.forEach((e) => {
  e.addEventListener("click", () => {
    text.textContent.length == 1 &&
    text.textContent == 0 &&
    op.indexOf(e.textContent) == -1
      ? (text.textContent = e.textContent)
      : (text.textContent += e.textContent);
  });
});

c.addEventListener("click", () => (text.textContent = 0));

del.addEventListener("click", () => {
  text.textContent = text.textContent.slice(0, -1);
  if (text.textContent.length == 0) {
    text.textContent = 0;
  }
});

go.addEventListener(
  "click",
  () => (text.textContent = Function(`return ${text.textContent}`)())
);
