const words = ['Web-Developer', 'video-editor', 'logo-designer', 'blogger'];

let i = 0;
let timer;
const skillMainElement = document.querySelector('.skill-main');
let currentWord = '';

function typingEffect() {
    let word = words[i].split("");
    let index = 0;

    var loopTyping = function() {
        if (index < word.length) {
            currentWord += word[index];
            skillMainElement.innerHTML = currentWord;
            index++;
            timer = setTimeout(loopTyping, 200);
        } else {
            deletingEffect();
        }
    };

    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    let index = word.length;

    var loopDeleting = function() {
        if (index > 0) {
            currentWord = currentWord.slice(0, -1);
            skillMainElement.innerHTML = currentWord;
            index--;
            timer = setTimeout(loopDeleting, 200);
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            typingEffect();
        }
    };

    loopDeleting();
}

typingEffect();

const sign = document.querySelector('.sign');
sign.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href = 'signup.html';
})


const log = document.querySelector('.log');
log.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href = 'login.html';
})