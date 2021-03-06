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
    { id: 'avatar',
      image: avatar,
      title: 'Avatar',
      rating: '3',
      trailer: '5PSNL1qE6VY',
      synopsis: `On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na'vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world.`},
    { id: 'candyman',
      image: candyman,
      title: 'Candyman',
      rating: '6',
      synopsis: "Skeptical graduate student Helen Lyle (Virginia Madsen) befriends Anne-Marie McCoy (Vanessa Williams) while researching superstitions in a housing project on Chicago's Near North Side. From Anne-Marie, Helen learns about the Candyman (Tony Todd), a knife-wielding figure of urban legend that some of her neighbors believe to be responsible for a recent murder. After a mysterious man matching the Candyman's description begins stalking her, Helen comes to fear that the legend may be all too real."},
      { id: 'crawlingeye', image: crawlingEye, title: 'The Crawling Eye', rating: '7', synopsis:"In a small Swiss resort town, sisters Anne (Janet Munro) and Sarah Pilgrim (Jennifer Jayne) are worried by Anne's telepathic sense, which goes haywire. Reporter Philip Truscott (Laurence Payne) and U.N. worker Alan Brooks (Forrest Tucker), who's in the area to investigate unusual radiation levels, also sense something is amiss. It turns out vicious extraterrestrials are living in a radiation cloud in the Alps, brutally killing anyone who comes near and threatening to descend upon the town."},
      { id: 'dayofthejackal', image: dayJackal, title: 'The Day of the Jackal', rating: '9', synopsis: "An underground French paramilitary group is intent on eliminating President Charles de Gaulle (Adrien Cayla-Legrand), but when numerous attempts on his life fail, they resort to hiring the infamous hit man known as 'The Jackal' (Edward Fox). As the enigmatic assassin prepares to shoot de Gaulle, he takes out any problematic people along the way. Meanwhile, Lebel (Michel Lonsdale), a savvy Parisian police detective, begins to solve the mystery of the killer's identity."},
      { id: 'dinosaur',
        image: dinosaur,
        title: 'Dinosaur',
        rating: '8',
        synopsis: "This is the story of Aladar (D.B. Sweeney), an iguanodon dinosaur raised by a family of lemurs. Their world is turned upside-down however, when meteors strike, turning their green world into a desert wasteland. Teaming up with a herd of other herbivores, the trek is on to find the 'Nesting Ground' where water and vegetation is bountiful... but with carnivores behind them and nothing but desert around for miles, it doesn't look promising!",
        trailer: 'vZnBR4SDIEs'},
      { id: 'frankenstein', image: frankenstein, title: 'Frankenstein Unbound', rating: '6', synopsis: "Particle physicist Dr. Joe Buchanan (John Hurt) builds a device capable of vaporizing anything it touches, in hopes of ending war once and for all. Unfortunately, when he is testing the prototype, the device accidentally sends Buchanan hurtling backwards in time to a small Swiss village in the year 1817. There he meets kindred spirit Dr. Victor Frankenstein (Raul Julia), who is hard at work contending with the complications of his own misguided experiment."},
      { id: 'godzilla', image: godzilla, title: 'Godzilla', rating: '7', synopsis: "Ford Brody (Aaron Taylor-Johnson), a Navy bomb expert, has just reunited with his family in San Francisco when he is forced to go to Japan to help his estranged father, Joe (Bryan Cranston). Soon, both men are swept up in an escalating crisis when Godzilla, King of the Monsters, arises from the sea to combat malevolent adversaries that threaten the survival of humanity. The creatures leave colossal destruction in their wake, as they make their way toward their final battleground: San Francisco."},
      { id: 'grudge2', image: grudge2, title: 'The Grudge 2', rating: '6', synopsis: "A young woman (Amber Tamblyn) encounters a terrible curse while searching for her missing sister (Sarah Michelle Gellar) in Tokyo. The evil imprecation fills its victims with murderous rage, but it also brings together the diverse group to unlock its secret and save their lives."},
      { id: 'kino-glas', image: kinoGlas, title: 'Kino Glas', rating: '4', synopsis: "Some mad Russian film." },
      { id: 'requiemforadream', image: requiem, title: 'Requiem for a Dream', rating: '10', synopsis: "Imaginatively evoking the inner landscape of human beings longing to connect, to love and feel loved, the film is a parable of happiness gloriously found and tragically lost. 'Requiem for a Dream' tells parallel stories that are linked by the relationship between the lonely, widowed Sara Goldfarb and her sweet but aimless son, Harry. The plump Sara, galvanized by the prospect of appearing on a TV game show, has started on a dangerous diet regimen to beautify herself for a national audience."},
    ]
  }

  //Because this is a basic JS file, we do not need to import React, nor add in
  //{} around the images. This is a proper front-end data source.
