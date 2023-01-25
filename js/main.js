
//CALCOLO PREZZO VIAGGIO CONSIDERANDO CHE:
// - Il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - Va applicato uno sconto del 20% per i minorenni
// - Va applicato uno sconto del 40% per gli over 65
// - L'output del prezzo finale va messo fuori con massimo due decimali, per indicare centesimi sul prezzo

const buttonEl = document.getElementById("calc-ticket");
const inputAgeEl = document.getElementById("user-age");
const inputKmEl = document.getElementById("user-km");


const inputPasseggero = document.getElementById("name-surname");

buttonEl.addEventListener(
    "click",
    function () {
        const userAge = inputAgeEl.value;
        const userKm = inputKmEl.value;

        const prezzo = 0.21 * userKm;
        let new_prezzo;

        if (userAge == "minorenne") {
            new_prezzo = prezzo - (0.2 * prezzo);
        } else if (userAge == "over65") {
            new_prezzo = prezzo - (0.4 * prezzo);
        } else {
            new_prezzo = prezzo;
        }

        document.getElementById("nome-passeggero").innerHTML = inputPasseggero.value;
        document.getElementById("code").innerHTML = parseInt((Math.random() * 10000) + 1);
        document.getElementById("carrozza").innerHTML = parseInt((Math.random() * 10) + 1);
        document.getElementById("posto").innerHTML = parseInt((Math.random() * 30) + 1);
        document.getElementById("outputCosto").innerHTML = new_prezzo.toFixed(2) + " €";
    }
);

