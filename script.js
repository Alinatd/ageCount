let currentYear = new Date().getFullYear()
let err = new Audio ("./false.mp3")
let corr = new Audio("./true.mp3")


const ageCount = ()=>{
    let year = document.getElementById('year').value
    let incorrect = document.getElementById('incorrect')
    let result = document.getElementById('result')

year = parseInt(year)

if(Number.isNaN(year)){
incorrect.style.display='block'
incorrect.style.color = 'red'
incorrect.style.backgroundColor = 'white'
result.style.display ='none'
err.play()

}else{
    let res = currentYear-year
   result.style.display ='block'
   incorrect.style.display='none'
result.innerHTML = "Сиздин жашыныз:"  +res
result.style.backgroundColor = 'white'
result.style.color = 'green'
corr.play()
}
 

}