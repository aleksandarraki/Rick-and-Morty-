class Character {
    constructor(id, image, name, status, species, gender, origin, location) {
        this.id = id,
            this.image = image,
            this.name = name,
            this.status = status,
            this.species = species,
            this.gender = gender,
            this.origin = origin,
            this.location = location


    };
};

export const getCharacters = () => {
    return fetch(`https://rickandmortyapi.com/api/character`)
        .then(response => response.json())
        .then(object => {
            return object.results.map(({ id, image, name }) => new Character(id, image, name));
        });
};


// export const getSingleCharacter = id => {
//     return fetch(`https://rickandmortyapi.com/api/character/14`)
//         .then(response => response.json())
//         .then(object => {
//             return new Character(object.id, object.image, object.name, object.status, object.species, object.gender, object.origin.name, object.location.name);
//         });
// };

export const getSingleCharacter = (id) => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(function (res) { return res.json(); })
        .then(function (characterRawObject) {

            const originArray = characterRawObject.origin;
            const origin = originArray.name
            return new Character(
                characterRawObject.name,
                characterRawObject.id,
                characterRawObject.image,
                characterRawObject.status,
                characterRawObject.species,
                characterRawObject.gender,
                origin
            )
        })
}








