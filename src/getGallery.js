import starWars from './images/star-wars-skywalker.jpg';
import jojoRabbit from './images/jojo-rabbit.jpg';
import theWitcher from './images/the-witcher.jpg';
import dracula from './images/dracula.jpg';
import goodbyeLenin from './images/goodbye-lenin.jpg';
import littleMiss from './images/little-miss.jpg';

export default function getGallery() {
    return [
      { id: 'starwars', image: starWars, title: 'Star Wars: The Rise of the Skywalker', rating: '4' },
      { id: 'jojorabbbit', image: jojoRabbit, title: 'Jojo Rabbit', rating: '9' },
      { id: 'thewitcher', image: theWitcher, title: 'The Witcher', rating: '6' },
      { id: 'dracula', image: dracula, title: 'Dracula', rating: '3' },
      { id: 'goodbyelenin', image: goodbyeLenin, title: 'Goodbye Lenin', rating: '7' },
      { id: 'littlemisssunshine', image: littleMiss, title: 'Little Miss Sunshine', rating: '7' },
    ]
  }

  //Because this is a basic JS file, we do not need to import React, nor add in {} around the images.