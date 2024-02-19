const form = document.getElementById("form");
const nomInput = document.getElementById("nom");
const prenomInput = document.getElementById("prenom");
const emailInput = document.getElementById("email");
const telephoneInput = document.getElementById("telephone");
const datenaissanceInput = document.getElementById("date_naissance");
const motDePasseInput = document.getElementById("mot_de_passe"); 


form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nom = nomInput.value.trim();
    if (nom === "" || nom.length < 0) {
        document.getElementById("nameError").textContent = "vous devez ecrire votre nom.";
        return;
    } else {
        document.getElementById("nameError").textContent = ""; 
    }


    const prenom = prenomInput.value.trim();
    if (prenom === "" || prenom.length < 0) {
        document.getElementById("prenomError").textContent = "vous devez ecrire votre prenom.";
        return;
    } else {
        document.getElementById("prenomError").textContent = ""; 
    }


    const email = emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert("Veuillez entrer une adresse e-mail valide.");
        return;
    }
    else {
        document.getElementById("date_naissanceError").textContent = ""; 
    }
    

    const telephone = telephoneInput.value.trim();
    const telephoneRegex = /^[0-9]{10}$/;
    if (!telephoneRegex.test(telephone)) {
        alert("Veuillez entrer un numero de telephone valide.");
        return;
    }
    else {
        document.getElementById("telephoneError").textContent = ""; 
    }


    const date_naissance = datenaissanceInput.value;
    const dateNaissanceRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateNaissanceRegex.test(date_naissance)) {
        alert("Veuillez entrer une date de naissance valide.");
        return; 
    }
    else {
        document.getElementById("date_naissanceError").textContent = ""; 
    }
    

    const mot_de_passe = motDePasseInput.value;
    const motDePasseRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!motDePasseRegex.test(mot_de_passe)) {
        alert("Le mot de passe doit contenir au moins 8 caracteres, dont une lettre minuscule, une lettre majuscule, un chiffre et un caractere special.");
        return;    
    }
    else {
        document.getElementById("mot_de_passeError").textContent = ""; 
    }

    alert("Formulaire soumis avec succes !");
    
});