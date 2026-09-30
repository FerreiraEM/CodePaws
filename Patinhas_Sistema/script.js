// ==============================
// LOGIN
// ==============================

const USUARIO = "admin@patinhas.com";
const SENHA = "1234";

const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (email === USUARIO && password === SENHA) {
    // Salva a sessão no navegador
    localStorage.setItem("patinhasLogado", "true");

    loginError.textContent = "";

    // Vai para o dashboard
    showAdminArea();
    switchTab("dashboard");

  } else {
    loginError.textContent = "E-mail ou senha incorretos.";
  }
});

// ==============================
// NAVEGAÇÃO
// ==============================

function switchTab(tabId) {
  // Se tentar acessar uma página protegida sem login,
  // manda para a tela de login.
  const targetPage = document.getElementById(tabId);

  if (targetPage && targetPage.classList.contains("protected") && !isLoggedIn()) {
    tabId = "login";
  }

  // Esconde todas as páginas
  const pages = document.querySelectorAll(".page");
  pages.forEach(page => page.classList.remove("active"));

  // Remove o estado ativo dos menus
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => link.classList.remove("active"));

  // Mostra a página escolhida
  const page = document.getElementById(tabId);

  if (page) {
    page.classList.add("active");
  }

  // Marca o item correto do menu
  navLinks.forEach(link => {
    const onclick = link.getAttribute("onclick");

    if (onclick && onclick.includes(`'${tabId}'`)) {
      link.classList.add("active");
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==============================
// LOGIN / LOGOUT
// ==============================

function isLoggedIn() {
  return localStorage.getItem("patinhasLogado") === "true";
}

function showAdminArea() {
  document.getElementById("publicNav").classList.add("hidden");
  document.getElementById("adminNav").classList.remove("hidden");
}

function showPublicArea() {
  document.getElementById("publicNav").classList.remove("hidden");
  document.getElementById("adminNav").classList.add("hidden");
}

function logout() {
  localStorage.removeItem("patinhasLogado");

  showPublicArea();
  switchTab("home");
}

// ==============================
// AO ABRIR A PÁGINA
// ==============================

window.addEventListener("DOMContentLoaded", function() {
  if (isLoggedIn()) {
    showAdminArea();
    switchTab("dashboard");
  } else {
    showPublicArea();
    switchTab("home");
  }
});
