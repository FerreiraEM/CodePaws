// =====================================================
// LOGIN
// =====================================================

function fazerLogin(event) {

    // Impede o formulário de atualizar a página
    event.preventDefault();


    // Pega os valores digitados
    const email = document.getElementById("email").value;

    const senha = document.getElementById("password").value;


    // Dados de acesso do administrador
    const emailCorreto = "admin@patinhas.com";

    const senhaCorreta = "1234";


    // Verifica os dados
    if (
        email === emailCorreto &&
        senha === senhaCorreta
    ) {

        // Guarda que o usuário está logado
        localStorage.setItem(
            "usuarioLogado",
            "true"
        );


        // Vai para o Dashboard
        window.location.href = "dashboard.html";


    } else {

        // Dados incorretos
        alert(
            "E-mail ou senha incorretos!"
        );

    }

}



// =====================================================
// VERIFICAR LOGIN
// =====================================================

function verificarLogin() {

    const usuarioLogado =
        localStorage.getItem("usuarioLogado");


    // Se não estiver logado,
    // volta para a tela de login

    if (usuarioLogado !== "true") {

        window.location.href = "login.html";

    }

}



// =====================================================
// SAIR DA CONTA
// =====================================================

function fazerLogout() {

    // Remove o login salvo
    localStorage.removeItem(
        "usuarioLogado"
    );


    // Volta para a tela de login
    window.location.href = "login.html";

}



// =====================================================
// INTERESSE EM ADOÇÃO
// =====================================================

function demonstrarInteresse(nomeAnimal) {

    alert(
        "Obrigado pelo interesse em " +
        nomeAnimal +
        "!\n\n" +
        "Entre em contato com a ONG para " +
        "agendar uma visita."
    );

}



// =====================================================
// DOAÇÃO
// =====================================================

function realizarDoacao() {

    const campo =
        document.getElementById("valor");


    if (!campo) {
        return;
    }


    const valor =
        Number(campo.value);


    if (
        campo.value === "" ||
        valor <= 0
    ) {

        alert(
            "Digite um valor válido para a doação."
        );

        return;

    }


    alert(
        "Obrigado pela sua doação de R$ " +
        valor.toFixed(2) +
        "!"
    );

}



// =====================================================
// FILTRO DE ANIMAIS
// =====================================================

function filtrarAnimais() {

    const campo =
        document.getElementById("filtroAnimais");


    if (!campo) {
        return;
    }


    const texto =
        campo.value.toLowerCase();


    const animais =
        document.querySelectorAll(".pet-card");


    animais.forEach(function(animal) {

        const conteudo =
            animal.innerText.toLowerCase();


        if (
            conteudo.includes(texto)
        ) {

            animal.style.display = "";

        } else {

            animal.style.display = "none";

        }

    });

}

// =====================================================
// FILTRO DO ESTOQUE
// =====================================================

function filtrarEstoque() {

    const busca = document
        .getElementById("buscaEstoque")
        .value
        .toLowerCase();

    const categoria = document
        .getElementById("categoriaEstoque")
        .value
        .toLowerCase();

    const linhas = document
        .querySelectorAll("#tabelaEstoque tr");


    linhas.forEach(function(linha) {

        const produto = linha
            .querySelector("td:nth-child(1)")
            .innerText
            .toLowerCase();

        const categoriaProduto = linha
            .querySelector("td:nth-child(2)")
            .innerText
            .toLowerCase();


        // Verifica se o nome corresponde à busca
        const correspondeBusca =
            produto.includes(busca);


        // Verifica a categoria
        let correspondeCategoria = true;

        if (categoria !== "") {

            correspondeCategoria =
                categoriaProduto.includes(categoria);

        }


        // Decide se a linha aparece
        if (
            correspondeBusca &&
            correspondeCategoria
        ) {

            linha.style.display = "";

        } else {

            linha.style.display = "none";

        }

    });

}

// =====================================================
// TELA DE INTERESSE EM ADOÇÃO
// =====================================================

function carregarAnimalInteresse() {

    const parametros =
        new URLSearchParams(window.location.search);

    const animal =
        parametros.get("animal");


    const nome =
        document.getElementById("interesseNome");

    const descricao =
        document.getElementById("interesseDescricao");

    const caracteristicas =
        document.getElementById("interesseCaracteristicas");

    const imagem =
        document.getElementById("interesseImagem");


    if (!animal || !nome || !descricao) {
        return;
    }


    if (animal === "thor") {

        nome.innerText = "Thor";

        descricao.innerText =
            "Macho · 2 anos · Porte médio";

        caracteristicas.innerText =
            "Sociável · Vacinado";

        imagem.classList.add("thor");

    }


    else if (animal === "luna") {

        nome.innerText = "Luna";

        descricao.innerText =
            "Fêmea · 1 ano · Porte pequeno";

        caracteristicas.innerText =
            "Tranquila · Vacinada";

        imagem.classList.add("luna");

    }


    else if (animal === "mel") {

        nome.innerText = "Mel";

        descricao.innerText =
            "Fêmea · 3 anos · Porte pequeno";

        caracteristicas.innerText =
            "Carinhosa · Vacinada";

        imagem.classList.add("mel");

    }

}


// =====================================================
// ENVIAR INTERESSE
// =====================================================

function enviarInteresse(event) {

    event.preventDefault();


    const nome =
        document.getElementById("nomeInteresse").value;


    const parametros =
        new URLSearchParams(window.location.search);

    const animal =
        parametros.get("animal");


    let nomeAnimal = "animal";


    if (animal === "thor") {
        nomeAnimal = "Thor";
    }

    else if (animal === "luna") {
        nomeAnimal = "Luna";
    }

    else if (animal === "mel") {
        nomeAnimal = "Mel";
    }


    alert(
        "Interesse enviado com sucesso!\n\n" +
        "Obrigado, " + nome + "!\n\n" +
        "A ONG recebeu seu interesse na adoção de " +
        nomeAnimal +
        " e poderá entrar em contato com você."
    );


    window.location.href = "adocao.html";

}
