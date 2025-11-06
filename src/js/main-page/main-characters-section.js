import { getCharacter, getCharacters, getLocation, getEpisode } from 'rickmortyapi'; //! My +++

export function initMainCharacters() {
  const img = document.getElementById('character-img');
  const characters = document.querySelectorAll('.main-characters__character');

  // function loadCharacterImage(name) {
  //   fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.results && data.results[0]) {
  //         img.src = data.results[0].image;
  //         img.alt = name;
  //       }
  //     })
  //     .catch(err => console.error('Error loading character image:', err));
  // };

  // loadCharacterImage('Rick Sanchez');

  // characters.forEach(char => {
  //   char.addEventListener('click', () => {
  //     const name = char.getAttribute('data-name');
  //     loadCharacterImage(name);
  //   });
  // });

  //! My ++++++++++++++++++++++++++++++++++++++++++++++
  async function loadCharacterImage(id) {
    const response = await getCharacter(id); 
    console.log(`getCharacter(${id})`, response.data);
    if (response.data) {
      // img.src = response.data.image;
      //! ❌ Так зображення відсутні на GitHub
      // if (id === 1) img.src = "../../img/mainpage-images/rick-sanchez-1x.png";
      // if (id === 2) img.src = "../../img/mainpage-images/morty-smith-1x.png";
      // if (id === 3) img.src = "../../img/mainpage-images/summer-smith-1x.png";
      // if (id === 4) img.src = "../../img/mainpage-images/beth-smith-1x.png";
      // if (id === 5) img.src = "../../img/mainpage-images/jerry-smith-1x.png";
      //! ❌ Так зображення є в localhost та на GitHub
      //todo:    new URL("../images/picture.jpg", import.meta.url).href;
      if (id === 1) img.src = new URL("../../img/mainpage-images/rick-sanchez-1x.png", import.meta.url).href;
      if (id === 2) img.src = new URL("../../img/mainpage-images/morty-smith-1x.png", import.meta.url).href;
      if (id === 3) img.src = new URL("../../img/mainpage-images/summer-smith-1x.png", import.meta.url).href;
      if (id === 4) img.src = new URL("../../img/mainpage-images/beth-smith-1x.png", import.meta.url).href;
      if (id === 5) img.src = new URL("../../img/mainpage-images/jerry-smith-1x.png", import.meta.url).href;
      img.alt = response.data.name;
    };
  };

  loadCharacterImage(1);

  characters.forEach(char => {
    char.addEventListener('click', () => {
      const id = Number(char.getAttribute('data-id'));
      loadCharacterImage(id);
    });
  });
  //! My ______________________________________________
};



//! My +++++++++++++++
// async function showCharacter(id) {
//   const response = await getCharacter(id); 
//   console.log("getCharacter(1)", response.data);
// };
// showCharacter(1); //! 1 — это Rick Sanchez