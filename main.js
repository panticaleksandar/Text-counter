const textAreaEl = document.querySelector("#textarea");
const total = document.querySelector(".total");
const remaining = document.querySelector(".remaining");

textAreaEl.addEventListener("keyup", () => {
    updateCounter();
});

const updateCounter = function () {
    total.innerHTML = textAreaEl.value.lenght;
    remaining.innerHTML = textAreaEl.getAttribute("maxlenght") - textAreaEl.value.lenght;
};

updateCounter();