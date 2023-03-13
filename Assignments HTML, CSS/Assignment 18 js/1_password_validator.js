function password_checker(e,c){
    (e===c) ? console.log("Password Matched. Password validation Successful.") : console.log("Password didn't match. Password validation unsuccessful");
}

let entered_password  = "1234@pwskills";
let confirmed_password = "1234@pwskill";

password_checker(entered_password, confirmed_password);