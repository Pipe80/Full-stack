// Tee funktio, jolle voidaan välittää parametrina kokonaislukuja sisältävä taulukko. 
// Funktion tulee tutkia mitkä luvuista ovat parillisia ja palauttaa nämä luvut taulukkona. 
// Funktiota kutsuvan ohjelman tulee tulostaa määritelty alkuperäinen taulukko 
// ja uusi vain parillisia lukuja sisältävä taulukko web-konsolille.

 function get_evens(taulu) {
    tasaluvut = []
    for (const numero of taulu) {
        if (numero % 2 == 0) {
            tasaluvut.push(numero)
        }
    }
    return tasaluvut
}

const taulukko = [6, 11, 22, 33, 44,1 ,3 ,8]
const taulukko2 = get_evens(taulukko)

console.log(taulukko)
console.log(taulukko2)