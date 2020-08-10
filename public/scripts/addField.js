contador = 0
//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)
//Executar uma ação
function cloneField() {
    const newfieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    const fields = newfieldContainer.querySelectorAll('input')
    fields.forEach(function(field){
        field.value = ""
    })
    document.querySelector('#schedule-items').appendChild(newfieldContainer)
    contador += 1
    console.log("Campo de novo horário adicionado com sucesso!")
}

//remover campo de novo horário
document.querySelector("#del-time")
//quando clicar no botão
.addEventListener('click', removeField)

//executar uma ação
function removeField() {
    const removefieldContainer = document.querySelector('.schedule-item')
    const fields = removefieldContainer.querySelectorAll('input')
    if (contador > 0) {
        document.querySelector('#schedule-items').removeChild(removefieldContainer)
        contador -= 1
        console.log("Campo de novo horário removido com sucesso!")
    }
}

