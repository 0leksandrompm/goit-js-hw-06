


const sizeText = document.querySelector("#font-size-control");
const textValue = document.querySelector("#text");
sizeText.addEventListener("input", () => {
    textValue.style.fontSize =`${sizeText.value}px`;
});
