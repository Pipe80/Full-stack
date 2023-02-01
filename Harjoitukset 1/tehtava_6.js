let taulukko = [11, 22, 33, 44];
let summa = 0;
let lukumaara = 11+22+33+44;
let tulosrivit = '';
// Laske taulukon alkioiden lukumäärä ja summa for...of-rakenteella. 
// Muuttujan tulosrivit sisältö tulee muodostaa for-rakenteella. 
// Laske lisäksi keskiarvo keskiarvo-muuttujaan. 
// Keskiarvo tulee tulostaa yhden desimaalin tarkkuudella (toFixed()-metodi)  
// Liitä lopuksi muuttujiin keräämäsi data näytettäväksi P-elementissä getElementById/innerHTML-yhdistelmää käyttäen. 

for (let numero of taulukko) {
    tulosrivit += "taulukko[" + lukumaara + "] = " + numero + "<br>"
    lukumaara++
    summa += numero
}

keskiarvo = (summa / taulukko.length).toFixed(1)

var rivit = document.getElementById("tehtava_6")
rivit.innerHTML += tulosrivit

var lopputulema = document.getElementById("tehtava_6")
lopputulema.innerHTML += "lukumäärä: " + lukumaara + "<br>"
lopputulema.innerHTML += "summa: " + summa + "<br>"
lopputulema.innerHTML += "keskiarvo: " + keskiarvo + "<br>"