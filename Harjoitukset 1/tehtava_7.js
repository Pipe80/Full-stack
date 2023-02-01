// Tee  JavaScript-ohjelma joka tulostaa web-sivulle, onko käyttäjän tekstinsyöttökentään syöttämä  vuosiluku karkausvuosi vai ei.   Karkausvuoden tarkistus tulee tehdä funktiolla, jolle voidaan välittää parametrina vuosiluku. Funktion tulee palauttaa true-arvo, jos vuosi on karkausvuosi ja false-arvo, jos vuosi ei ole karkausvuosi. Syötteen oikeamuotoisuutta ei tarvitse tarkistaa.
// Algoritmi: 4:llä jaolliset on, paitsi täydet vuosisadat. Kuitenkin 400:lla jaolliset vuosisadat ovat.
// Esimerkki tulostuksesta:
// 1991 -> ei ole karkausvuosi
// 1992 -> on karkausvuosi
// 1900 -> ei ole karkausvuosi
// 2000 -> on karkausvuosi
var tulokset = document.getElementById("tehtava_7")

function tarkistaKarkausVuosi(vuosi) {
    if (vuosi % 400 == 0) {
        return true
    } else if (vuosi % 4 == 0 && vuosi % 100 != 0) {
        return true
    } else {
        return false
    }
}

function print_results(vuosi) {
    if (tarkistaKarkausVuosi(vuosi)) {
        tulokset.innerHTML = vuosi + " On karkausvuosi"
    } else {
        tulokset.innerHTML = vuosi + " Ei ole karkausvuosi"
    }
}