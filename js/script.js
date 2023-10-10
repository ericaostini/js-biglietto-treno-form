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
    if (name === "" || km === "" || eta === ""){
        alert("inserisci i valori mancanti!");
    }
});