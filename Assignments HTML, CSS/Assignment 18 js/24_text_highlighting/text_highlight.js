let p = document.querySelector('p');

let arr = p.innerHTML.trim().split(" ");

let str = "";

arr.forEach((el,i) => {
    if(el.length > 8){
        str += `<span>${el}</span>`;
    }
    else{
        str += el;
    }
    if(i !== arr.length - 1){
        str += " ";
    }
});

p.innerHTML = str;