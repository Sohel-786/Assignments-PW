function books_published_after_2010(){
    let arr = [];
    for(let i = 0; i<arguments.length; i++){
        arr.push(arguments[i]);
    }
    
    arr = arr.map(el => {
        let obj = {};
        obj.Book = el[0];
        obj.Author = el[1];
        obj.Publishing_Year = el[2];

        return obj;
    })

    arr = arr.filter(el => {
        el = filtered(el);
        return el.Publishing_Year > 2010;
    })

    return arr;   // creating a new array, well yes array of objects
}


function filtered(el){
    let author_name = el.Author.trim().split(" ");

    let new_Arr = [];
    
      author_name.forEach(el => {
            
            el = el.trim().split("");
            
           el =  el.map((ele,i) => {
                if(i == 0){
                    ele = ele.toUpperCase();
                    return ele;
                }
                else{
                    ele =  ele.toLowerCase();
                    return ele;
                }
            })
            
            new_Arr.push(el);
        });

       new_Arr = new_Arr.map(el => {
            el = el.join("");
            return el;
       })

       el.Author = new_Arr.join(" ");
       return el;
}


let result = books_published_after_2010(
        // BookName , AutharName, YearOfPublication
        ["Mockingjay", "suzanne collins", 2010],  // lowercase author names
        ["Clockwork Angel", "Cassandra Clare", 2010],
        ["Matched",  "Ally condie", 2009],
        ["The Lost Hero", "rick Riordan", 2008],
        ["Divergent" , "veronica roth", 2011],
        ["Fifty Shades of Grey", "James", 2012],
        ["Ready Player One", "ernest cline", 2011],
        ["Gone Girl", "gillian flynn", 2012],
        ["The Selection", "Kiera cass", 2012],
        ["Shadow and Bone", "Leigh bardugo", 2012],
        ["Inferno", "dan brown", 2013],
        ["The Goldfinch", "donna Tartt", 2013],
        ["Scarlet", "marissa meyer", 2013],
        ["The 5th Wave", "Rick yancey", 2013],
        ["Fangirl", "Rainbow rowell", 2013],
        ["Becoming", "michelle obama", 2018],
        ["Katerina", "james frey", 2018],
        ["The Last Thing He Told Me", "LAURA DAVE", 2021]
)

console.log(result);