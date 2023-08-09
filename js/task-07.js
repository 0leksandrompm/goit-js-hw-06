


const sizeText = document.querySelector("#font-size-control");
const textValue = document.querySelector("#text");
textValue.style.fontSize =`${sizeText.value}px`;

sizeText.addEventListener("input", () => {
    textValue.style.fontSize =`${sizeText.value}px`;
});
