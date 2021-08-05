let resizeBtn = document.querySelector('.resize-button');
let log = document.querySelector('.log');

windowElem = document.querySelector('.window');

windowElem.addEventListener('mousemove', (mouse) => {
    if(mouse.x > windowElem.offsetWidth) {
        windowElem.addEventListener('mousemove', (mouse) => {
            if (mouse.which == 1 && mouse.x > (windowElem.offsetWidth/windowElem.offsetWidth)) {  // right mouse btn is clicked
               document.querySelector('.window').style.width = `${mouse.x + 5}px`;
                resizeBtn.classList.add('grabbed')
            }
        })   
    }
})

resizeBtn.addEventListener('mouseup', () => {
    resizeBtn.classList.remove('grabbed')
})

let text = `> terminal running
> installing html...
> html installed
> GET [https://nasa.org]
> hacking NASA with html...
> ... ... ... ...
> No secrets found`;
let editor = document.querySelector('code');

let i = 0;
let speed = Math.ceil(Math.random() * 100);

setInterval(() => {
    if (i < text.length) {
        speed = Math.ceil(Math.random() * 1000);
        editor.innerText += text[i]
        i+=1;
    }
}, speed);