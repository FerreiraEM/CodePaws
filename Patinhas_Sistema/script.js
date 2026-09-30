// ========================================
// PATINHAS & AMIGOS
// JavaScript principal
// ========================================


// ========================================
// LOGIN
// ========================================

function fazerLogin() {

    const email = document.getElementById("email");
    const senha = document.getElementById("password");

    // Verifica se os campos existem
    if (!email || !senha) {
        return;
    }

    const emailDigitado = email.value.trim();
    const senhaDigitada = senha.value.trim();


    // Dados de demonstração
    const emailCorreto = "admin@patinhas.com";
    const senhaCorreta = "1234";


    if (
        emailDigitado === emailCorreto &&
        senhaDigitada === senhaCorreta
    ) {

        // Guarda a informação de que o usuário entrou
        localStorage.setItem(
            "usuarioLogado",
            "true"
        );

        // Vai para outra tela
        window.location.href =
            "dashboard.html";

    } else {

        alert(
            "E-mail ou senha incorretos."
        );

    }

}


// ========================================
// LOGOUT
// ========================================

function fazerLogout() {

    localStorage.removeItem(
        "usuarioLogado"
    );

    window.location.href =
        "index.html";

}


// ========================================
// VERIFICAR LOGIN
// ========================================

function verificarLogin() {

    const usuarioLogado =
        localStorage.getItem("usuarioLogado");


    // Se a página for administrativa
    // e o usuário não estiver logado,
    // volta para o login.

    if (
        usuarioLogado !== "true"
    ) {

        window.location.href =
            "login.html";

    }

}


// ========================================
// INTERESSE EM ADOÇÃO
// ========================================

function demonstrarInteresse(nomeAnimal) {

    alert(
        "Seu interesse em " +
        nomeAnimal +
        " foi registrado!"
    );

}


// ========================================
// DOAÇÃO
// ========================================

function realizarDoacao() {

    const campoValor =
        document.getElementById("valorDoacao");


    if (!campoValor) {
        return;
    }


    const valor =
        campoValor.value;


    if (
        valor === "" ||
        Number(valor) <= 0
    ) {

        alert(
            "Digite um valor válido para a doação."
        );

        return;

    }


    alert(
        "Doação de R$ " +
        Number(valor).toFixed(2).replace(".", ",") +
        " registrada no protótipo!"
    );

}


// ========================================
// FILTRO DE ANIMAIS
// ========================================

function filtrarAnimais() {

    const campo =
        document.getElementById("buscarAnimal");


    if (!campo) {
        return;
    }


    const pesquisa =
        campo.value.toLowerCase();


    const animais =
        document.querySelectorAll(
            ".animal-card"
        );


    animais.forEach(function(animal) {

        const texto =
            animal.innerText.toLowerCase();


        if (
            texto.includes(pesquisa)
        ) {

            animal.style.display =
                "";

        } else {

            animal.style.display =
                "none";

        }

    });

}


// ========================================
// FILTROS POR CATEGORIA
// ========================================

function filtrarCategoria(categoria) {

    const animais =
        document.querySelectorAll(
            ".animal-card"
        );


    animais.forEach(function(animal) {

        const tipo =
            animal.dataset.tipo;


        if (
            categoria === "todos" ||
            tipo === categoria
        ) {

            animal.style.display =
                "";

        } else {

            animal.style.display =
                "none";

        }

    });

}


// ========================================
// MODAL
// ========================================

function abrirModal(id) {

    const modal =
        document.getElementById(id);


    if (modal) {

        modal.classList.remove(
            "hidden"
        );

    }

}


function fecharModal(id) {

    const modal =
        document.getElementById(id);


    if (modal) {

        modal.classList.add(
            "hidden"
        );

    }

}


// ========================================
// FECHAR MODAL CLICANDO FORA
// ========================================

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains(
                "modal"
            )
        ) {

            event.target.classList.add(
                "hidden"
            );

        }

    }
);


// ========================================
// TECLA ESC
// ========================================

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            const modais =
                document.querySelectorAll(
                    ".modal"
                );


            modais.forEach(function(modal) {

                modal.classList.add(
                    "hidden"
                );

            });

        }

    }
);


// ========================================
// MENSAGEM DE SUCESSO
// ========================================

function mostrarMensagem(mensagem) {

    alert(mensagem);

}


// ========================================
// CADASTRO DE ANIMAL
// ========================================

function cadastrarAnimal() {

    const nome =
        document.getElementById("nomeAnimal");

    const especie =
        document.getElementById("especieAnimal");


    if (!nome || !especie) {
        return;
    }


    if (
        nome.value.trim() === "" ||
        especie.value.trim() === ""
    ) {

        alert(
            "Preencha os dados do animal."
        );

        return;

    }


    alert(
        "Animal " +
        nome.value +
        " cadastrado com sucesso!"
    );


    nome.value = "";
    especie.value = "";

}


// ========================================
// CADASTRO DE ESTOQUE
// ========================================

function cadastrarEstoque() {

    const produto =
        document.getElementById("produto");


    if (!produto) {
        return;
    }


    if (
        produto.value.trim() === ""
    ) {

        alert(
            "Informe o nome do produto."
        );

        return;

    }


    alert(
        "Produto cadastrado com sucesso!"
    );


    produto.value = "";

}


// ========================================
// NOVO COMPROMISSO
// ========================================

function cadastrarCompromisso() {

    const compromisso =
        document.getElementById(
            "compromisso"
        );


    if (!compromisso) {
        return;
    }


    if (
        compromisso.value.trim() === ""
    ) {

        alert(
            "Informe o compromisso."
        );

        return;

    }


    alert(
        "Compromisso cadastrado com sucesso!"
    );


    compromisso.value = "";

}


// ========================================
// CARREGAMENTO DA PÁGINA
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "Patinhas & Amigos carregado."
        );

    }
);
