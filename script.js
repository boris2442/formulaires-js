// Récupération des éléments
const form = document.getElementById('dynamicForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Fonction de validation du champ Nom d'utilisateur
username.addEventListener('input', () => {
  if (username.value.trim() === '') {
    usernameError.textContent = "Le nom d'utilisateur est obligatoire.";
  } else if (username.value.length < 3) {
    usernameError.textContent = "Le nom doit contenir au moins 3 caractères.";
  } else {
    usernameError.textContent = '';
  }
  toggleSubmitButton();
});

// Fonction de validation de l'email
email.addEventListener('input', () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === '') {
    emailError.textContent = "L'email est obligatoire.";
  } else if (!emailRegex.test(email.value)) {
    emailError.textContent = "L'email n'est pas valide.";
  } else {
    emailError.textContent = '';
  }
  toggleSubmitButton();
});

// Fonction de validation du mot de passe
password.addEventListener('input', () => {
  if (password.value.trim() === '') {
    passwordError.textContent = "Le mot de passe est obligatoire.";
  } else if (password.value.length < 6) {
    passwordError.textContent = "Le mot de passe doit contenir au moins 6 caractères.";
  } else {
    passwordError.textContent = '';
  }
  toggleSubmitButton();
});

// Fonction pour activer/désactiver le bouton de soumission
function toggleSubmitButton() {
  if (
    username.value.trim() !== '' &&
    usernameError.textContent === '' &&
    email.value.trim() !== '' &&
    emailError.textContent === '' &&
    password.value.trim() !== '' &&
    passwordError.textContent === ''
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

// Empêcher l'envoi si des champs ne sont pas valides
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Empêche le rechargement de la page
  alert('Formulaire soumis avec succès !');
});