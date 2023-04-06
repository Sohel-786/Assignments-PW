let List = [
    {
        title : 'Game of Thrones',
        author:'Starks',
        year: 2014
    },
    {
        title : 'Avengers',
        author:'Stan Lee',
        year: 2012
    },
    {
        title : 'Man of Steel',
        author:'Zack Snyder',
        year: 2013
    },
    {
        title : 'Justice League',
        author:'Zack Snyder',
        year: 2017
    },
    {
        title : 'John Wick',
        author:'Chad Stahelski',
        year: 2014
    },
    {
        title : 'Avatar: The Way of Water',
        author:'James Cameron',
        year: 2022
    }
];

let master_function = (listOfBooks, callback)=>{
    let new_list = listOfBooks.map((el)=>{
        return el.title;
    })

    callback(new_list);
}

function callback(new_list){
    new_list.sort();
    // console.log(new_list);
    new_list.forEach(el => {
        console.log(el);
    });
}

master_function(List, callback);