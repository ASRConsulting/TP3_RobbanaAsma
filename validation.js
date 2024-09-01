document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche l'envoi du formulaire par défaut

    let isValid = true;

    // Réinitialise les messages d'erreur
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    // Réinitialise les styles des champs
    document.querySelectorAll('input, select, textarea').forEach(el => el.classList.remove('border-red-500'));

    // Vérification du champ Civilité
    const civilite = document.getElementById('Civilités');
    const civiliteError = document.getElementById('civilite-error');
    if (civilite.value === "Votre civilité") {
        civiliteError.textContent = 'Veuillez sélectionner votre civilité.';
        civilite.classList.add('border-red-500');
        isValid = false;
    }

    // Vérification du champ Nom et Prénom
    const nom = document.querySelector('input[placeholder="Votre Nom et Prénom"]');
    const nomError = document.getElementById('nom-error');
    if (nom.value.trim() === '') {
        nomError.textContent = 'Le champ Nom et Prénom est obligatoire.';
        nom.classList.add('border-red-500');
        isValid = false;
    }

    // Vérification du champ Entreprise
    const entreprise = document.querySelector('input[placeholder="Votre Entreprise"]');
    const entrepriseError = document.getElementById('entreprise-error');
    if (entreprise.value.trim() === '') {
        entrepriseError.textContent = 'Le champ Entreprise est obligatoire.';
        entreprise.classList.add('border-red-500');
        isValid = false;
    }

    // Vérification du numéro de téléphone
    const phone = document.getElementById('phone-input');
    const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    const phoneError = document.getElementById('phone-error');
    if (!phonePattern.test(phone.value)) {
        phoneError.textContent = 'Veuillez entrer un numéro de téléphone valide (format : 123-456-7890).';
        phone.classList.add('border-red-500');
        isValid = false;
    }

    // Vérification de l'email
    const email = document.querySelector('input[type="email"]');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailError = document.getElementById('email-error');
    if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Veuillez entrer une adresse email valide.';
        email.classList.add('border-red-500');
        isValid = false;
    }

    // Vérification du champ Nombre de logements
    const nombreLogements = document.getElementById('number-input');
    const nombreLogementsError = document.getElementById('nombre-logements-error');
    if (nombreLogements.value.trim() === '' || isNaN(parseInt(nombreLogements.value))) {
        nombreLogementsError.textContent = 'Veuillez entrer un nombre de logements valide.';
        nombreLogements.classList.add('border-red-500');
        isValid = false;
    }

    // Vérification du champ Délais
    const delais = document.getElementById('délais');
    const delaisError = document.getElementById('delais-error');
    if (delais.value === "Délai de votre projet") {
        delaisError.textContent = 'Veuillez sélectionner un délai pour votre projet.';
        delais.classList.add('border-red-500');
        isValid = false;
    }

    // Si tout est valide, on peut soumettre le formulaire
    if (isValid) {
        alert('Votre demande a bien été envoyée, nous reprendrons contact avec vous rapidement!');
        this.submit();
    }
});
