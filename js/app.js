import { getCharacters, getSingleCharacter } from "./data.js";
import { renderCharacters, renderSingleCaracter } from "./ui.js";
const mainContentEl = document.getElementById("main-content");
const getData = () => {
    getCharacters().then((characters) => {
        renderCharacters(characters);
    })
}

getData();

const onImgClick = event => {
    console.log("cao");
    const targetEl = event.target.closest(".imgClass");
    console.log(targetEl);
    if (!targetEl.classList.contains(".imgClass")) {
        return;
    }
    const id = targetEl.getAttribute("id");
    // console.log(id);
    getSingleCharacter(id).then(character => {
        renderSingleCaracter(character);
    })
}




mainContentEl.addEventListener("click", onImgClick)