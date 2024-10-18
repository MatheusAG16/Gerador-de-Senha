function gerarSenha() {

    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'

    let tamanho = document.getElementById("tamanho")
    console.log(tamanho.value)

    if(tamanho.value < 0 || tamanho.value > 20){
        window.alert("Digite um valor de 1 a 20")
        return false
    } else {

    let senha = ''

    for(i = 0; i < tamanho.value; i++) {

        senha += caracteres[Math.floor(Math.random() * caracteres.length)]

    }
    let pSenha = document.getElementById("pSenha")
    pSenha.innerHTML = `<p>${senha}</p>`
    }
    
}