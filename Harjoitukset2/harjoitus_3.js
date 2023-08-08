//4/4pistettä
//setTimeout functiolla määritellään aika, milloin kyseinen toiminto suoritetaan
//ensimmäisenä tulostuisi task3, siellä setTimeout arvoksi on annettu 500
//sen jälkeen tulostuu task1 ja task2 (järjestyksessä ylhäältä alaspäin, näillä on samat arvot). 
//Lopuksi konsoliin tulostuu :last code line executed!
//vaikea arvioida harjoituksen pisteytystä, koska en voi tarkistaa onko päättelyni oikein.
// tässä suoritetaan 3 asiaa str, taskTime ja callback: const execute = (str, taskTime, callback)
// ja niille annetut arvot löytyvät mm. tästä : execute('Task1', 2000, print)
//ensimmäinen arvo nimi, toinen se aika joka kuluu ja kolmas tulostaa arvot
const print = (str, taskTime) => {
    setTimeout(function() {
      console.log(`${str} finished!`)
    }, taskTime)
  }
  
  const execute = (str, taskTime, callback)  => {  
    callback(str, taskTime)
  }
  
  console.log("Task1 to execution...")
  execute('Task1', 2000, print)
  
  console.log("Task2 to execution...")
  execute('Task2', 2000, print)
  
  console.log("Task3 to execution...")
  execute('Task3', 500, print)
  
  console.log("Last code line executed!")
  