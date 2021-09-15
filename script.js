console.log("This is a script file")

const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')

// console.log(name, email, phone)

name.addEventListener('blur', ()=>{
    console.log("Name is blurred.")
    // Validate Name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){1,10}$/
    let str = name.value
    console.log(regex, str)
    if(regex.test(str)){
        console.log("The name is valid")
        name.classList.remove('is-invalid')
    }
    else{
        console.log("The name is invalid")
        name.classList.add('is-invalid')
    }
})
email.addEventListener('blur', ()=>{
    console.log("Email is blurred.")
    // Validate Email here
    let regex = /^([_\-\.a-z0-9]+)@([a-z0-9]+)\.([a-zA-Z]){1,7}$/
    let str = email.value
    console.log(regex, str)
    if(regex.test(str)){
        console.log("The email is valid")
        email.classList.remove('is-invalid')
    }
    else{
        console.log("The email is invalid")
        email.classList.add('is-invalid')
    }
})
phone.addEventListener('blur', ()=>{
    console.log("Phone is blurred.")
    // Validate Phone here
    let regex = /^([0-9]){10}$/
    let str = phone.value
    console.log(regex, str)
    if(regex.test(str)){
        console.log("The phone is valid")
        phone.classList.remove('is-invalid')
    }
    else{
        console.log("The phone is invalid")
        phone.classList.add('is-invalid')
    }
})