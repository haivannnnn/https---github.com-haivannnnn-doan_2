var tennguoidung = document.querySelector('#tennguoidung')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var form = document.querySelector('form')


function showError(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim()

        if(!input.value){
            isEmptyError = true;
            showError(input, 'khong duoc de trong')
        }else{
            showSuccess(input)
        }
    });
}

function checkEmailError(input){
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    input.value = input.value.trim();

    let isEmailError = !emailRegex.test(input.value)
    if(emailRegex.test(input.value)){
        showSuccess(input)
    }else{
        showError(input, 'Email Invalid')
    }
    return isEmailError
}

function checkLengthError(input, min, max){
    input.value = input.value.trim()

    if(input.value.length < min){
        showError(input, `Phai co it nhat ${min} ky tu`)
        return true
    }
    if(input.value.length > max) { 
        showError(input, `Khong duoc qua ${max} ky tu`)
        return true
    }
    showSuccess(input)
    return false
}
form.addEventListener('submit', function(e){
    e.preventDefault()

    let isEmptyError = checkEmptyError(tennguoidung, email, password, confirmPassword)

    let isEmailError = checkEmailError(email)

    let isusernameLengthError = checkLengthError(tennguoidung, 3, 10)

    // let isPasswordLengthError = checkLengthError(password)

    // let isConfirmpasswordLengthError = checkLengthError(confirmPassword)
})