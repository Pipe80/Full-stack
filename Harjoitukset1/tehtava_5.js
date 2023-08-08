// Tee funktio, jolle voidaan välittää parametrina kokonaislukuja sisältävä taulukko. 
// Funktion tulee tutkia mitkä luvuista ovat parillisia ja palauttaa nämä luvut taulukkona. 
// Funktiota kutsuvan ohjelman tulee tulostaa määritelty alkuperäinen taulukko 
// ja uusi vain parillisia lukuja sisältävä taulukko web-konsolille.


//ohjelmaa kutsutaan index.html:stä.
 function get_evens(taulu) {
    tasaluvut = []
    for (const numero of taulu) {
        if (numero % 2 == 0) {
            tasaluvut.push(numero)
        }
    }
    return tasaluvut
}

const taulukko = [6, 1, 21, 3, 44,11 ,33 ,7]
const taulukko2 = get_evens(taulukko)

console.log(taulukko)
console.log(taulukko2)