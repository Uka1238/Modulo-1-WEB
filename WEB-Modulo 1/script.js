//Seleciona os inputs
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const senha = document.getElementById("senha")

//Adiciona o blur
nome.addEventListener("blur", () => {
    const erro = document.getElementById ("erro-nome");
    if (nome.value.trim() === ""){
        erro.textContent = "O nome é Obrigatório.";
    } else {
        erro.textContent = "";
    }
});
email.addEventListener("blur", () => {
    const erro = document.getElementById ("erro-email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        erro.textContent = "O email é inválido.";
    } else {
        erro.textContent = "";
    }
});
senha.addEventListener("blur", () => {
    const erro = document.getElementById ("erro-senha");
    if (senha.value.trim().length < 6) {
        erro.textContent = "A senha deve ter pelo menos 6 caracteres.";
    } else {
        erro.textContent = "";
    }
});
