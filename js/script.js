const button = document.querySelector(".btn-secondary");
console.log(button);
const buttonAnnulla = document.querySelector(".btn-outline-light");
console.log(buttonAnnulla);

buttonAnnulla.addEventListener("click", function(){
    const name = document.getElementById("name").value = "";
    const km = document.getElementById("km").value = "";
    const eta = document.getElementById("eta").value = "";
    biglietto.classList.add("d-none");
})

button.addEventListener("click", function(){
    const name = document.getElementById("name").value;
    const km = document.getElementById("km").value;
    const eta = document.getElementById("eta").value;
    const biglietto = document.getElementById("biglietto");
    console.log(km);
    console.log(eta);
    console.log(name);
    if (name === "" || isNaN(km) || eta === ""){
        alert("inserisci i valori mancanti!");
    } else{
        const nominativo = document.getElementById("nominativo").innerHTML = `
        <h6 class = "fw-bolder">Nome passeggero</h6>
        <p class = "fw-bolder"> ${name} </p>
    `;
        const offerta = document.getElementById("offerta").innerHTML = `
        <h6>Offerta</h6>
        <p> ${eta}</p>
    `;
        const carrozza = document.getElementById("carrozza");
        const nCarrozza = carrozza.querySelector("div").innerHTML =
        Math.floor(Math.random() * 10);
        const codice = document.getElementById("codice");
        const cp = codice.querySelector("div").innerHTML =
        Math.floor(Math.random() * 99999) + 10000;
    }
        const pFisso = 0.21;
        let costoViaggio = pFisso * km;
        if (eta === "Biglietto Under18"){
            costoViaggio = (costoViaggio - (costoViaggio * 20/100));
        } else if(eta === "Biglietto Over65"){
            costoViaggio = (costoViaggio - (costoViaggio * 40/100))
        } else {
            costoViaggio;
        }
        console.log(costoViaggio);
        let decimalCost = costoViaggio.toFixed(2);
        const costo = document.getElementById("costo").innerHTML = `
        <h6 class = "fw-bolder">Costo Biglietto</h6>
        <p class = "fw-bolder"">${decimalCost} &euro;</p>
        `;
        biglietto.classList.remove("d-none");
});
