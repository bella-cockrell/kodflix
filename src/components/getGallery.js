import avatar from '../images/avatar.jpg';
import candyman from '../images/candyman.jpg';
import crawlingEye from '../images/crawling-eye.jpg';
import dayJackal from '../images/day-jackal.jpg';
import dinosaur from '../images/dinosaur.jpg';
import frankenstein from '../images/frankenstein.jpg';
import godzilla from '../images/godzilla.jpg';
import grudge2 from '../images/grudge-2.jpg';
import kinoGlas from '../images/kino-glas.jpg';
import requiem from '../images/requiem.jpg';

export default function getGallery() {
    return [
      { id: 'avatar', image: avatar, title: 'Avatar', rating: '3' },
      { id: 'candyman', image: candyman, title: 'Candyman', rating: '6' },
      { id: 'crawlingeye', image: crawlingEye, title: 'The Crawling Eye', rating: '7' },
      { id: 'dayofthejackal', image: dayJackal, title: 'The Day fo the Jackal', rating: '9' },
      { id: 'dinosaur', image: dinosaur, title: 'Dinosaur', rating: '8' },
      { id: 'frankenstein', image: frankenstein, title: 'Frankenstein Unbound', rating: '6' },
      { id: 'godzilla', image: godzilla, title: 'Gozilla', rating: '7' },
      { id: 'grudge2', image: grudge2, title: 'The Grudge 2', rating: '6' },
      { id: 'kino-glas', image: kinoGlas, title: 'Kino Glas', rating: '4' },
      { id: 'requiemforadream', image: requiem, title: 'Requiem for a Dream', rating: '10' },
    ]
  }

  //Because this is a basic JS file, we do not need to import React, nor add in {} around the images.
  //This is a proper front-end data source.
