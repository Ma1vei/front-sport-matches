// const opnstat = document.querySelector('.team-name-scorre ');
// const stat = document.querySelector('.hidden');
// const nostat = document.querySelector('.visible');

// let a = true

// opnstat.addEventListener('click', () => {
//     if(a) {
//         stat.style.display="block";
//         stat.style.height="auto";
//         stat.style.opacity="1";
//         a = false;
//     } else {
//         stat.style.height="0";
//         stat.style.opacity="0";
//         a = true;
//     }
// });

const openmenu = document.querySelector('.burg');
const menu = document.querySelector('.burger-menu');
const close = document.querySelector('.closeburg');


const btnSection = document.querySelectorAll('.section-theme-main-main');

for (let index = 0; index < btnSection.length; index++) {
    btnSection[index].addEventListener('click', function(event) {
        let wrapper = event.target.closest('.section-theme-main');
        wrapper.classList.toggle('_active');
    });
}




openmenu.addEventListener('click', () => {
    menu.style.display="block";
});
close.addEventListener('click', () => {
    menu.style.display="none";
});

const favbtn = document.querySelector('.fav-btn');
const favorite = document.querySelector('.favorites');
const all = document.querySelector('.all');

favbtn.addEventListener('click', () => {
    all.style.display="none";
    unwatch.style.display="none";
    favorite.style.visibility="visible";
    favorite.style.opacity="1";
    favorite.style.display="block";
});

const btnnonwatch = document.querySelector('.non-watch');
const unwatch = document.querySelector('.unwatch');

btnnonwatch.addEventListener('click', () => {
    all.style.display="none";
    favorite.style.display="none"
    unwatch.style.visibility="visible";
    unwatch.style.opacity="1";
    unwatch.style.display="block";
});

const allopn = document.querySelector('.open');
const hid = document.querySelectorAll('.hidden');

const Section = document.querySelectorAll('.section-theme-main');

allopn.addEventListener('click', (event) => {
    for (let index = 0; index < Section.length; index++) {
        Section[index].classList.add('_active');
    }
});

const clse = document.querySelector('.close');

clse.addEventListener('click',() => {
    for (let index = 0; index < Section.length; index++) {
        Section[index].classList.remove('_active');
    }
})
