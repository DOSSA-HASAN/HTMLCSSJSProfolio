document.addEventListener('DOMContentLoaded', ()=>{
    //get button that switches from dark and light theme
    const themToggle = document.getElementById('themeButton')
    const body = document.body
    const whiteElements = document.querySelectorAll('.text-white')

    const menuButton = document.getElementById('menuButton')
    const links = document.querySelector('.mobile-links')

    const heroImage = document.querySelector('#hero-img img')
    const skillImage = document.querySelector('#skills-img img')
    let isDark = true

    const pentagon = document.querySelectorAll('.service img') 
    const skill = document.querySelectorAll('.service-cont')

    themToggle.addEventListener('click', ()=>{
        isDark = !isDark
        //when clicked get toggle all elements with class text white to black
        //and change body bg- to white
        body.classList.toggle('bg-white');
        whiteElements.forEach(function(element){
            element.classList.toggle('text-black')
        })

        heroImage.src = !isDark? 'images/hero-light.png' : 'images/hero-dark.png'
        skillImage.src = !isDark? 'images/skills-light.png' : 'images/skills-dark.png'

    })

    menuButton.addEventListener('click', ()=>{
        links.classList.toggle('hidden')
        links.style.flexDirection = 'column'
    })

    skill.forEach((skill, index)=>{
        skill.addEventListener('mouseover', ()=>{pentagon[index].src = 'images/white-pentagon.png'})
        skill.addEventListener('mouseout', ()=>{pentagon[index].src = 'images/purple-pentagon.png'})
    })


})