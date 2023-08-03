let delay = 3000;   // 3 seconds

function message(){
    let time = delay/1000;
    const count = setInterval(seconds,1000);

        function seconds(){

            if(time !==0){
                console.log(`${time} seconds remaining`);
            }
            
            time--;
            
            if(time == -1){
                clearInterval(count);
                random_number();
            }
        }
        
}

message();

function random_number(){
    console.log(Math.round(Math.random() * 16));
}