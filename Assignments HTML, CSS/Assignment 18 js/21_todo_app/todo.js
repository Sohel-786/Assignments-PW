function add_item(){
    let li = document.createElement("li");

    let new_item = document.querySelector('#input');

    if(new_item.value == ""){
        new_item.setAttribute('class','p_holder');
        new_item.placeholder = "Please Enter something";
    }
    else{

        li.innerHTML = new_item.value;
        let ol = document.querySelector('ol');
        ol.append(li);
        new_item.placeholder = "Enter Todo Item";
        new_item.setAttribute('class','fake');
    }
    new_item.value = "";
}

