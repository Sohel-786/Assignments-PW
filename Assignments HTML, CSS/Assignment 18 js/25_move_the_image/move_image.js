let main_img = document.querySelector('#main_img');

window.document.body.addEventListener('keydown', fun)

function fun(){
    if(event.key == 'ArrowUp'){
        border();
        main_img.style.border = '2px solid #00aaaa';
        img[1].style.border = '2px solid red';
        move_up();
    }

    if(event.key == 'ArrowDown'){
        border();
        main_img.style.border = '2px solid #00ff5e';
        img[4].style.border = '2px solid red';
        move_down();
    }

    if(event.key == 'ArrowRight'){
        border();
        main_img.style.border = '2px solid blue';
        img[3].style.border = '2px solid red';
        move_right();
    }

    if(event.key == 'ArrowLeft'){
        border();
        main_img.style.border = '2px solid #c300ff';
        img[2].style.border = '2px solid red';
        move_left();
    }
}

let img = document.querySelectorAll('img');
console.log(img)
function border(){
    let arr = [];
    img.forEach((el,i) =>{
        if(i !== 0){
            arr.push(el);
        }
    });
    
    arr.forEach(el => {
        el.style.border = 'none';
    })
}

border();

position = 2;
position2 = 2;

function move_right(){
    if(position2 == 634){
        alert('limit reached')
    }
    else{

        if(position2 == 622){
            position2 += 12;
            main_img.style.left = position2 + 'px';

        }
        else{
            position2 += 20;
            main_img.style.left = position2 + 'px';
        }
    }
}


function move_left(){
    if(position2 == 14){
        position2 = position2 - 12;
        main_img.style.left = position2 + 'px';
    }
    else{

        if(position2 == 2){
            alert('limit reached');
        }
        else{
            position2 = position2 - 20;
            main_img.style.left = position2 + 'px';
        }
    }
  
}


function move_up(){

    if(position == 68){
        position -= 6;
        main_img.style.top = position + 'px';
    }
    else{

        if(position == 2 || position == 62){
            alert('limit reached');
        }
        else{
            position -= 20;
            main_img.style.top = position + 'px';
            if(position == 62){
                position = 2;
            }
        }
    }
   
}


function move_down(){

    if(position == 308){
        alert('limit reached');
    }
    else{

            if(position == 302){
                    position += 6;
                    main_img.style.top = position + 'px';
                    }
            else{
                    if(position == 2){
                        position += 60;
                    }
                    position +=20
                    main_img.style.top = position + 'px';
                }
   
    }
}

