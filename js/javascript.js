// menu-mobile
const menuDiv = document.getElementById("menu-mobile");
const btnAnimar = document.getElementById("btn-menu");

function animar() {
    menuDiv.classList.toggle("abrir");
    btnAnimar.classList.toggle("ativo");

    // dá movimento ao X do menu toggle
    const btn = document.getElementById("btn-menu");
    btn.classList.toggle("ativar");
}

menuDiv.addEventListener("click", animar);

// ----------------------------------------------

// Seleciona o botão "voltar ao topo"
var btn = document.querySelector(".back-to-top");

// Adiciona um ouvinte de eventos para o botão
btn.addEventListener("click", function () {
    // Anima a página de volta ao topo
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// Seleciona o botão "voltar ao topo"
var btn = document.querySelector(".back-to-top");

// Esconde o botão no carregamento da página
btn.style.display = "none";

// Adiciona um ouvinte de eventos para detectar o scroll da página
window.addEventListener("scroll", function () {
    // Se o usuário rolou a página em 100px, exibe o botão
    if (window.scrollY > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

// Adiciona um ouvinte de eventos para o clique do botão
btn.addEventListener("click", function () {
    // Anima a página de volta ao topo
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
