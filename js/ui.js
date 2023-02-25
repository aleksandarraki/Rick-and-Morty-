const mainContentEl = document.getElementById("main-content");

export const renderCharacters = (characters) => {
    // const mainContentEl = document.getElementById("main-content");

    let html = `
    <div id="show-list">`;

    characters.forEach(element => {
        html += `
        <div class="show-item card pt-3 ” style=“width: 18rem;“> id="${element.id}">
           <img src="${element.image}" alt="show cover image" class="card-img-top imgClass" img-thumbnail/>
           <p>${element.name}</p>

           <div class="card-bottom">
           <button class="like-button" style="font-size:15px"><i style="font-size:15px" class="fa">&#xf087;</i> Like</button>
         </div>
       </div>
        `;
    });

    html += `</div>`;
    mainContentEl.innerHTML = html;
};

export const renderSingleCaracter = character => {
    let html = `
    <div class="character-wrapper">
       <div class="container text-center">
           <h1 class="character-name">${character.name}</h1>
        </div>
       <div class="container justify-content-center">
         <img src="${character.image}">
       </div>
       <div class="details overflow-hidden">
          <div class="row justify-content-center">
            <div class="col-sm-3">
           <h5>Status: </h5>
           </div>
         <div class="col-sm-9">${character.status}</div>
       </div>
       <div class="row justify-content-center">
         <div class="col-sm-3">
           <h5>Species: </h5> 
         </div>
         <div class="col-sm-9">${character.species}</div>
       </div>
       <div class="row justify-content-center">
         <div class="col-sm-3">
           <h5>Gender: </h5> 
         </div>
         <div class="col-sm-9">${character.gender}</div>
       </div>
       <div class="row justify-content-center">
         <div class="col-sm-3">
           <h5>Origin: </h5> 
         </div>
         <div class="col-sm-9">${character.origin.name}</div>
       </div>
       <div class="row justify-content-center">
         <div class="col-sm-3">
           <h5>Location: </h5>
         </div>
         <div class="col-sm-9">${character.location.name}</div>
       </div>
       <div class="row justify-content-center">
          <button id="back-button">Back</button>
       </div>

       </div>

       </div>
       

    `
    mainContentEl.innerHTML = html;
}

