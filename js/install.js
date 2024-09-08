let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');

// Écouter l'événement beforeinstallprompt
window.addEventListener('beforeinstallprompt', (event) => {
  // Empêcher l'affichage automatique de la boîte de dialogue
  event.preventDefault();
  deferredInstallPrompt = event;

  // Afficher le bouton en supprimant l'attribut hidden
  installButton.hidden = false;

  installButton.addEventListener('click', () => {
    // Masquer le bouton
    installButton.hidden = true;

    // Afficher la boîte de dialogue d'installation
    deferredInstallPrompt.prompt();

    // Attendre la réponse de l'utilisateur
    deferredInstallPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Utilisateur a accepté l\'installation');
      } else {
        console.log('Utilisateur a refusé l\'installation');
      }
      deferredInstallPrompt = null;
    });
  });
});
