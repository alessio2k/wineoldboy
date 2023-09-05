let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxwordindex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changetext = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxwordindex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity= "1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";

        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxwordindex ? 0: currentWordIndex + 1;
};
changetext();
setInterval(changetext,3000);

//active menu//
let menuLi =document.querySelectorAll('header l ul li a')
let selection = document.querySelector('section');

function activeMenu(){
    let len = section.lenght;
    while(--len && window.scrollY * 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu)


// header sticky//

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 50)
})

//mobile navbar//
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}