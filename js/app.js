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
    // console.log("cao");
    const targetEl = event.target;
    console.log(targetEl);
    // if (!targetEl.classList.contains(".imgClass")) {
    //     return;
    // }
    console.log(targetEl.parentElement);
    const id = targetEl.parentElement.getAttribute("id");
    console.log(id);
    getSingleCharacter(id).then(character => {
        renderSingleCaracter(character);
    })
}

const onBackButtonClick = e => {
    const targetEl = e.target.parentNode.parentNode.parentNode;
    if (!targetEl.classList.contains("character-wrapper")) {
        return;
    };
    getCharacters().then(character => { renderCharacters(character) });
};

const likeButtonClick = e => {
    const likeButton = e.target;
    if (!likeButton.classList.contains("like-button")) {
        return;
    };
    likeButton.classList.toggle("liked");
}


mainContentEl.addEventListener("click", onImgClick);
mainContentEl.addEventListener("click", onBackButtonClick);
mainContentEl.addEventListener("click", likeButtonClick);