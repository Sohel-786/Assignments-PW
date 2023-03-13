
let array_of_colors = [];          // as it said that it utilizes an array  
let main = document.querySelector('main');

function change_color(){

    
    let str = '0123456789abcdef'
    let color = "#";
    for(let i = 1; i <= 6; i++){

        color += str[Math.round(Math.random() * 15)];
        
    }
    array_of_colors.push(color);

    array_of_colors = array_of_colors.filter((el,i) => {
        console.log(el)
       if(array_of_colors[i] !== array_of_colors[i - 1]){  // to ignore duplication
            return el;
        }
    });

    main.style.backgroundColor = array_of_colors[array_of_colors.length - 1];                               
}
  