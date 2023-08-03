let filled = document.querySelector('.filled');

function progress(){
     filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
     requestAnimationFrame(progress);
}

progress();