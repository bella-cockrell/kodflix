import React from 'react';
import Card from './Card';
import getGallery from './getGallery';

export default function Gallery() {
  return (
    <div>
      <div className='container'> {
        getGallery().map(card => (
          <Card
            key = {card.id}
            id = {card.id}
            image = {card.image}
            title = {card.title}
            rating = {card.rating} />
        ))
        }
      </div>
    </div>
  );
}
//Please note: each returned child in an array.map must have a unique key prop, otherwise
//it will throw up an ugly error in devtools. This ensures that all our elements are uniquely identified.