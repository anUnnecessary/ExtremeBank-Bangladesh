document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('email-submit') 
    const email = emailField.value
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value
    console.log(email , password)
    if(email === 'shamilbhai@gmail.com' && password ==='secret' ){
        window.location.href = 'bank-inside.html'
    }
    else{
        alert('Invalid Input')
    }
})