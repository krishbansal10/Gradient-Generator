const body = document.querySelector("body"),
    gradientBox = document.querySelector(".gradient-box"),
    selectMenu = document.querySelector(".select-box select"),
    colourInputs = document.querySelectorAll(".colours input"),
    textarea = document.querySelector("textarea"),
    refreshBtn = document.querySelector(".refresh"),
    copyBtn = document.querySelector(".copy");

const getRandomColour = () => {
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generateGradient = (isRandom) => {
    if(isRandom) {
        colourInputs[0].value = getRandomColour();
        colourInputs[1].value = getRandomColour();
    }
    const gradient = `linear-gradient(${selectMenu.value}, ${colourInputs[0].value}, ${colourInputs[1].value})`;
    gradientBox.style.background = gradient;
    body.style.background = gradient;
    textarea.value = `background: ${gradient}`;
}

const copyCode = () => {
    navigator.clipboard.writeText(textarea.value);
    copyBtn.innerText = "Code Copied...";
    setTimeout(() => {
        copyBtn.innerText = "Copy Code";
    }, 700);
}

colourInputs.forEach(input => {
    input.addEventListener("input", () => generateGradient(false));
})

selectMenu.addEventListener("change", () => generateGradient(false));
refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);
window.addEventListener("load", () => generateGradient(true))