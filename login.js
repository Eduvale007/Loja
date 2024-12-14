// Importa os módulos necessários do Firebase
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAAP2CJGKTaWWv88mRSQyg5r05PYBbW3FM",
  authDomain: "webfast-3ae9b.firebaseapp.com",
  projectId: "webfast-3ae9b",
  storageBucket: "webfast-3ae9b.firebasestorage.app",
  messagingSenderId: "168886603901",
  appId: "1:168886603901:web:054cd633d30e03f1d1a114",
  measurementId: "G-KNH3HZDL4J"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Seleciona elementos do DOM
const form = document.querySelector('.form');
const signUpLink = document.querySelector('.sign-up-link');
const logoutButton = document.querySelector('.logout-button');

// Adiciona evento para o login
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  const password = e.target.querySelector('input[type="password"]').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert('Login realizado com sucesso!');
      console.log(userCredential.user);
      logoutButton.style.display = 'block'; // Exibe o botão de logout
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Erro ao fazer login: ${errorMessage}`);
    });
});

// Adiciona evento para criar uma nova conta
signUpLink.addEventListener('click', () => {
  const email = prompt('Digite seu e-mail:');
  const password = prompt('Digite sua senha:');

  if (email && password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert('Conta criada com sucesso!');
        console.log(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Erro ao criar conta: ${errorMessage}`);
      });
  } else {
    alert('Por favor, insira um e-mail e senha válidos.');
  }
});

// Adiciona evento para o logout
logoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      alert('Logout realizado com sucesso!');
      logoutButton.style.display = 'none'; // Esconde o botão de logout
    })
    .catch((error) => {
      alert(`Erro ao fazer logout: ${error.message}`);
    });
});
