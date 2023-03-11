function login(){
    event.preventDefault();

    let form = document.querySelector('form');
    let email = form.email.value;
    let password = form.password.value;

    let temp_arr = email.split("");
    let count;
    temp_arr.forEach(el => {
        if(el == '@'){
            count = 1;
        }
    })

    let p = document.querySelector('p'); // because there is only one <p> element

    if(count == 1){
        if(password.length <= 8){
            p.style.color = 'green';
            p.innerText = "Valid email and password!";
        }
        else{
            p.style.color = 'red';
            p.innerText = "Invalid email or password!";
        }
    }
    else{
        p.style.color = 'red';
        p.innerText = "Invalid email or password!";
    }
}