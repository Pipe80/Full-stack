// Moduulissa tulee olla getName toiminto, joka palauttaa nimesi
// Moduulissa tulee olla getLocation toiminto, joka palauttaa nykyisen asuinkaupunkisi
// Moduulissa tulee olla vakio, joka määrittelee syntymäpäiväsi muodossa dd.mm.yyyy

// Määrittele kaikki toiminnot ja vakio-arvo näkyville moduulin ulkopuolelle. 
// Ota moduuli käyttöösi Node.js-sovellukseen ja käytä kaikkia toimintoja ja ominaisuuksia. 
// Tulosta tiedot konsolille.
// Esimerkkitoiminta:

// > node 02-exercise.js
// Kirsi Kernel lives in Jyvaskyla and was born on 01.01.1980.

//4/4pistettä
const user = require('./pirjomure')

const user_name = user.getName()
const user_location = user.getLocation()
const user_birthdate = user.birthdate

console.log(`${user_name} lives in ${user_location} and was born on ${user_birthdate}`)
