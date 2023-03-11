function change_text(){
    let heading = document.querySelector("h1");
    let text1 = "The most affordable learning platform";
    let text2 = "PW Skills";
    (heading.innerText == text1) ? heading.innerText = text2 : heading.innerText = text1;
}