// validar se o input é número e colocar '.' e '-'
function isNumber(e) {
    const inputCPF = document.getElementById('cpf')
    const inputCPFValue = inputCPF.value.trim()

    if (e.keyCode >= 45 && e.keyCode <= 57 ) {
        if (inputCPFValue.length === 3 || inputCPFValue.length === 7) {
            inputCPF.value += '.'
        }
        if (inputCPFValue.length === 11) {
            inputCPF.value += '-'
        }
        return true
    }
    else {
        return false
    }
}

const btnValidate = document.querySelector('.btnValidar')

btnValidate.addEventListener('click', () => {
    const inputCPF = document.getElementById('cpf')
    const inputCPFValue = inputCPF.value.trim()

    const popupContainer = document.querySelector('.popup-container')
    const iconContainer = document.querySelector('.icon-container')
    const txtValidation = document.querySelector('.txtValidation')

    // validação sucesso
    if (getCPF(inputCPFValue) === true) {
        popupContainer.classList.add('show')
        txtValidation.innerHTML = 'CPF Válido!'
        txtValidation.style.color = '#27AE60'
        iconContainer.innerHTML += '<i style="color: #27AE60;" class="fas fa-check-circle"></i>'
    }
    // validação fracasso
    else {
        popupContainer.classList.add('show')
        txtValidation.innerHTML = 'CPF Inválido!'
        txtValidation.style.color = '#E74C3C'
        iconContainer.innerHTML += '<i style="color: #E74C3C;" class="fas fa-exclamation-circle"></i>'
    }
})

const btnClose = document.querySelector('.btnClose')

btnClose.addEventListener('click', () => {
    const popupContainer = document.querySelector('.popup-container')
    const iconContainer = document.querySelector('.icon-container')

    iconContainer.removeChild(iconContainer.childNodes[1])

    popupContainer.classList.remove('show')
})

// Função para fazer o calculo do CPF
function getCPF(input) {
    const cpfNum = input.replace(/[-.]/g, '')

    if (getFirstDigit(cpfNum) == true && getSecondDigit(cpfNum) == true) {
        return true
    }
    else {
        return false
    }
}

// Função calcular o Primeiro Digito
function getFirstDigit(n) {
    // Calcular o Primeiro Digito
    const indexNum = [10, 9, 8, 7, 6, 5, 4, 3, 2]

    let sumFirst = 0
    for (let i = 0; i < indexNum.length; i++) {
        let num = n[i] * indexNum[i]

        sumFirst += num
    }

    let resFirst = (sumFirst * 10) % 11

    if (resFirst == n[9]) {
        return true
    }
    else {
        return false
    }
}

// Função calcular o Segundo Digito
function getSecondDigit(n) {
    // Calcular o Segundo Digito
    const indexNum = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]

    let sumSecond = 0
    for (let i = 0; i < indexNum.length; i++) {
        let num = n[i] * indexNum[i]

        sumSecond += num
    }

    let resSecond = (sumSecond * 10) % 11

    if (resSecond == n[10]) {
        return true
    }
    else {
        return false
    }
}