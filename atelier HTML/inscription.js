
const form = document.getElementById("form");
const nomInput = document.getElementById("nom");
const emailInput = document.getElementById("email");
const motDePasseInput = document.getElementById("mot_de_passe");


form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nom = nomInput.value.trim();
    if (nom === "" || nom.length < 3) {
        document.getElementById("nameError").textContent = "Le nom doit contenir au moins 3 caractères.";
        return;
    } else {
        document.getElementById("nameError").textContent = ""; 
    }

    const email = emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert("Veuillez entrer une adresse e-mail valide.");
        return;
    }

    const motDePasse = motDePasseInput.value;
    const motDePasseRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!motDePasseRegex.test(motDePasse)) {
        alert("Le mot de passe doit contenir au moins 8 caractères, dont une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial.");
        return;
    }
    alert("Formulaire soumis avec succès !");
});