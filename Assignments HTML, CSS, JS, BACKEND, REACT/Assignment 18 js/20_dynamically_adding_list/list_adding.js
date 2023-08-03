let array_of_items = [
    "HTML and Semantics", "Starting with CSS", "Working Template","Mobile responsive webpages", "Grid and Flex-box in CSS", "Projects using HTML & CSS", "Version Control and Git", "Getting Started with JavaScript", "Advance JavaScript", "Working with DOM", "Making Projects using HTML, CSS and JavaScript", "Understanding Fundamental of Computer Science", "Getting Started with Database", "Understanding the Database", "Starting with NodeJS and Express", "Understanding React and its Fundamentals", "Understanding Hooks and Routers", "Starting and Completing Full Fledge Projects"
];
console.log(array_of_items.length)
let i = 0;
let msg = document.querySelector('.msg');

function add_item(){
    let li = document.createElement("li");
    li.innerHTML = array_of_items[i];
    if(i < array_of_items.length){
        document.querySelector('ol').append(li);
    }
    else{
        msg.style.display = 'flex';
    }
    i++;
}

function hide(){
    msg.style.display = 'none';
}