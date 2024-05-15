let text = document.querySelector(".sec-text");

let textTyping = ()=>{
    setTimeout(() => {
        text.textContent= "Student"
    }, 0);

    setTimeout(() => {
        text.textContent= "Gamer"
    }, 4000);

    setTimeout(() => {
        text.textContent= "Programmer"
    }, 8000);
}

textTyping()
setInterval(textTyping,12000)