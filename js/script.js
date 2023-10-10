

const button = document.querySelector(".btn-secondary");
console.log(button);
const buttonAnnulla = document.querySelector(".btn-danger");
console.log(buttonAnnulla);

button.addEventListener("click", function(){
    const name = document.getElementById("name").value;
    const km = document.getElementById("km").value;
    const eta = document.getElementById("eta").value;
    console.log(km);
    console.log(eta);
    console.log(name);
    if (name === "" || isNaN(km) || eta === ""){
        alert("inserisci i valori mancanti!");
    } else{
        const nominativo = document.getElementById("nominativo").innerHTML = `
        <h4>Nome passeggero</h4>
        <p> ${name} </p>
    `;
        const offerta = document.getElementById("offerta").innerHTML = `
        <h6>Offerta</h6>
        <p> ${eta}</p>
    `;
    }
});

buttonAnnulla.addEventListener("click", function(){
    const name = document.getElementById("name").value = " ";
    const km = document.getElementById("km").value = " ";
    const eta = document.getElementById("eta").value = " ";
})