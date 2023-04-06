async function results(){
       try{
            let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            res = await res.json();
            console.log(res)
        }catch(err){
            console.log(err);
        }
}

results();