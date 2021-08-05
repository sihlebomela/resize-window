let resizeBtn = document.querySelector('.resize-button');
let log = document.querySelector('.log');

windowElem = document.querySelector('.window');

windowElem.addEventListener('mousemove', (mouse) => {
    if(mouse.x > windowElem.offsetWidth/1.2) {
        windowElem.addEventListener('mousemove', (mouse) => {
            if (mouse.which == 1 && mouse.x > (windowElem.offsetWidth/windowElem.offsetWidth)) {  // right mouse btn is clicked
               document.querySelector('.window').style.width = `${mouse.x + 10}px`;
                resizeBtn.classList.add('grabbed')
            }
        })   
    }
})

resizeBtn.addEventListener('mouseup', () => {
    resizeBtn.classList.remove('grabbed')
})

