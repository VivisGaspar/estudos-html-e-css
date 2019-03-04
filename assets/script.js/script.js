let email = "vivis@hcode.com.br";
email = "vivis@hcode.com.br";

console.log(email);
console.log(`O seu email é: ${email}`);

document.querySelector("#btn-submit").addEventListener("click", e => {
    console.log("O botão foi clicado");
});

document.querySelector("#form-login").addEventListener('mouseenter', e=> {
    console.log("O mouse está sobre o formulário");
});

document.querySelector("#form-login").addEventListener("mouseleave", e => {
    console.log("O mouse está fora do formulário");

});

document.querySelector("#form-login").addEventListener("submit", e=> {
    e.preventDefault();

     let email = document.querySelector("#email").value;
     let password = document.querySelector("#password").value;
    
     console.log(email, password);
     
});

