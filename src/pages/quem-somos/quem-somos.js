//Animações
const element1 = document.querySelectorAll('.anima_right')
const element2 = document.querySelectorAll('.anima_left')
const element3 = document.querySelectorAll('.anima_bottom')

const myObserver1 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show_right')
        } else {
            entry.target.classList.remove('show_right')
        }
    })
})
const myObserver2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show_left')
        } else {
            entry.target.classList.remove('show_left')
        }
    })
})
const myObserver3 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show_bottom')
        } else {
            entry.target.classList.remove('show_bottom')
        }
    })
})

element1.forEach((element)=>{
    myObserver1.observe(element)
})
element2.forEach((element)=>{
    myObserver2.observe(element)
})
element3.forEach((element)=>{
    myObserver3.observe(element)
})
