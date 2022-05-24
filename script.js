
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')


function verifica(){
    if(nome.value == "" || email.value == "" || assunto.value == ""){
        alert("Todos os campos são obrigatórios")
        return false
    }
    return true
}

function enviar(){
    if(verifica()){
        alert("Olá " + nome.value + "! Email enviado com sucesso")
    }
    /*function ValidaNome(){
    if(nome.value.length < 3){
        let txt = document.querySelector('#txtNome')
        txt.innerHTML = 'Nome Invalido'
        txt.getElementsByClassName.color = 'red'
    }else{
        txt.innerHTML = 'Nome valido'
        txt.style.color ='green'

        }
    }

    function ValidaEmail(){
            let txtEmail = document.querySelector('txtEmail')
            if(email.value.indexof('@')== -1){
                txtEmail.innerHTML = 'E-mail Invalido'
                txtEmail.style.color = 'red'
            }
        }


