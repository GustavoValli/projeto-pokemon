const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoAlterarTema = document.querySelector(".imagem-botao")

window.scroll({top: 0, behavior: "smooth"});

botaoAlterarTema.addEventListener("click", () => {

    body.classList.toggle("modo-escuro");
    imagemBotaoAlterarTema.setAttribute("src", "./src/imagens/moon.png");

    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    if (!modoEscuroAtivo) {
        imagemBotaoAlterarTema.setAttribute("src", "./src/imagens/sun.png")
    }
    else {
        imagemBotaoAlterarTema.setAttribute("src", "./src/imagens/moon.png");
    }

});