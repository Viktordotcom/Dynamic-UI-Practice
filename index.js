import { makeMobileMenu } from 'create-mobile-menu';
import { makeDropDown } from 'create-dd-menu';
const dropBtn = document.querySelectorAll('.dropbtn');
const openMenuBtn = document.getElementById('btn-open-menu');
const menuList = document.querySelector('.menu-list')
const imageContainer = document.querySelector('.image-frame');
const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const dotsContainer = document.getElementById('dots-container');
const dotsCollection = document.querySelectorAll('.navigation-dots');

previousBtn.addEventListener('click', displayPreviousImage)

nextBtn.addEventListener('click', displayNextImage)

function changeCurrent(e){
    let curr = Array.from(imageContainer.children).find(image=> image.dataset.n == e.target.dataset.n);
    let currDot = Array.from(dotsContainer.children).find(dot=> dot.dataset.n == e.target.dataset.n);
    let findCurrent = Array.from(imageContainer.children).find(child=> child.className.toLowerCase() === 'visible')
    let findDot = Array.from(dotsContainer.children).find(dot=>
        dot.className.toLowerCase() === 'navigation-dots active'
    )
    findCurrent.classList.remove('visible')
    findDot.classList.remove('active')    
    currDot.classList.toggle('active')
    curr.classList.toggle('visible')
}
dotsCollection.forEach(dot=>{
    dot.addEventListener('click', changeCurrent)
})

function displayNextImage(){
let findCurrent = Array.from(imageContainer.children).find(child=> child.className.toLowerCase() === 'visible')
let findDot = Array.from(dotsContainer.children).find(dot=>
    dot.className.toLowerCase() === 'navigation-dots active'
)


if(findCurrent != imageContainer.lastElementChild){
    findCurrent.classList.remove('visible')
    findDot.classList.remove('active')
    findCurrent.nextElementSibling.classList.toggle('visible')
    findDot.nextElementSibling.classList.toggle('active')
}

else {
    findCurrent.classList.remove('visible')
    findDot.classList.remove('active')
    imageContainer.firstElementChild.classList.add('visible')
    dotsContainer.firstElementChild.classList.add('active')
}


}


function displayPreviousImage(){
    let findCurrent = Array.from(imageContainer.children).find(child=> child.className.toLowerCase() === 'visible')
    let findDot = Array.from(dotsContainer.children).find(dot=>
        dot.className.toLowerCase() === 'navigation-dots active'
    )
    if(findCurrent == imageContainer.firstElementChild){
        findCurrent.classList.remove('visible')
        findDot.classList.remove('active')
        imageContainer.lastElementChild.classList.add('visible')
        dotsContainer.lastElementChild.classList.add('active')
    }
    else{
        findCurrent.classList.remove('visible')
        findDot.classList.remove('active')
        findCurrent.previousElementSibling.classList.toggle('visible')
        findDot.previousElementSibling.classList.toggle('active')   
    }


}
setInterval(()=>{
    setTimeout(()=>{
    displayNextImage()
    }, 1000)  
}, 6000)


makeDropDown(dropBtn,`#AA874F`,`#6f1d1b`);
makeMobileMenu(openMenuBtn, menuList);
