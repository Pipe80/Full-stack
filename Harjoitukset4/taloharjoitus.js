async function renderHouses() {
    let talot = await getHouses();
    console.log(talot);
//ykkösosa tehtävästä onnistui ja sain talot näkymään. Kakkososassa tehtävää onnistuin hajottamaan koodin
//ja yritin korjata sitä pari päivää, onnistumatta. Harjoitus 4, 6/6 pistettä ja Harjoitus 4. tehtävä 2, 3/6pistettä
    let talotkin=document.getElementById("talot")
    
        koko = document.getElementById("koko")
        hinta = document.getElementById("hinta")
    
        if (koko.checked) {
            talot = koko(talot)
        }
    
        if (hinta.checked) {
            talot = hinta(talot)
        }
    
        let house_div = document.getElementById("talot")
    
        house_div.innerHTML = ""
    }
    
    talot.forEach(talot => {        
        housecontainer = document.createElement("div")
        housecontainer.className = "houseContainer"

        let image = document.createElement("img")
        image.src = "kuvat/" + talot.image
        image.className = "taloKuvat"

        let header = document.createElement("p")
        header.className = "header"
        header.innerHTML = talot.address

        let size = document.createElement("p")
        size.className = "size"
        size.innerHTML = talot.size + "m²"

        let text = document.createElement("p")
        text.className = "text"
        text.innerHTML = talot.text

        let price = document.createElement("p")
        price.className = "price"
        price.innerHTML = new Intl.NumberFormat('fi-FI').format(talot.price) + " euroa"
   
        housecontainer.appendChild(image);
        housecontainer.appendChild(header);
        housecontainer.appendChild(size);
        housecontainer.appendChild(text);
        housecontainer.appendChild(price);
				
		talotkin.appendChild(housecontainer); 
    });    


function muokkaaHintaa(talot) {
    return talot.filter(talot => talot.price < 1000000)
}

function muokkaaKokoa(talot) {
    return talot.filter(talot => talot.size < 200)
}

koko = document.getElementById("koko")
hinta = document.getElementById("hinta")

koko.addEventListener("change", () => renderHouses())
hinta.addEventListener("change", () => renderHouses())

renderHouses()