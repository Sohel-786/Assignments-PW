async function asynchronous(){
           try{
                let [res1, res2] = await Promise.all([
                fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) =>{
                   return res.json();
                }),
                fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) =>{
                    return res.json();
                })
            ]);

                let CombinedData = {
                    todo : res1,
                    post : res2
                }

                return CombinedData;
        }
        catch(err){
            console.log(err);
        }
}

asynchronous().then((res) =>{
    console.log(res);
})