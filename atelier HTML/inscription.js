// Récupération des éléments du formulaire
const form = document.getElementById("form");
const nomInput = document.getElementById("nom");
const emailInput = document.getElementById("email");
const motDePasseInput = document.getElementById("mot_de_passe");

// Écouteur d'événement pour la soumission du formulaire
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Validation du nom
    const nom = nomInput.value.trim();
    if (nom === "" || nom.length < 3) {
        document.getElementById("nameError").textContent = "Le nom doit contenir au moins 3 caractères.";
        return;
    } else {
        document.getElementById("nameError").textContent = ""; // Efface le message d'erreur
    }

    // Validation de l'e-mail
    const email = emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert("Veuillez entrer une adresse e-mail valide.");
        return;
    }

    // Validation du mot de passe
    const motDePasse = motDePasseInput.value;
    const motDePasseRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!motDePasseRegex.test(motDePasse)) {
        alert("Le mot de passe doit contenir au moins 8 caractères, dont une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial.");
        return;
    }

    // Si tout est valide, vous pouvez soumettre le formulaire
    alert("Formulaire soumis avec succès !");
});

/*
function validerDateOfBirth(){
    var elementDate =
    document.getElementById("date_naissance");
    var elementValue=new Date(elementDate.value);
    const dateAujourdhui = new Date();
    if(elementValue>=dateAujourdhui)
    {
        alert("please enter a valid date of birth");
    }
        else
        {
            alert("Date of birth valid");
        }
    }
    var formElement = document.getElementById("form") 
    var nameElement = document.getElementById("nom");
    formElement.addEventListener("submit", function(event){
        event.preventDefault()
        validateName()

})



function validateName(){
    var NameValue = nameElement.value;
    var pattern = /^[a-zA-Z]+$/;
    var nameError = document.getElementById("nameError");
    if(!NameValue.match(pattern)){
        nameError.innerHTML = 
        "<span style='color :red' > Nom ne doit contenir que des lettres et doit avoir au moins 1 caractère </span>"
    }
    else{
        nameError.innerHTML = "<span style='color :green'>Nom valide</span>";
    }
}
*/


