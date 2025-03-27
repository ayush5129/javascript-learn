// Normal approach

// const randomColor = function(){
//    const hexColor = "0123456789ABCDEF"
//    let color = "#"
//    for(let i = 0; i<6; i++){
//        color += hexColor[parseInt(Math.random() * 16)]
//    }
//    return color;
// }
// const body = document.querySelector("body")
// const fillBackground = function(){
//     body.style.backgroundColor = randomColor()
// }
// let startPoint;
// document.getElementById("start").addEventListener("click",function(){
//    startPoint = setInterval(fillBackground,1000)
// })
// document.querySelector("#stop").addEventListener("click",function(){
//      clearInterval(startPoint)
// })

// more efficient approach 
const randomColor = function(){
    const hexColor = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i<6; i++){
        color += hexColor[parseInt(Math.random() * 16)]
    }
    return color;
 }
 const body = document.querySelector("body")
 let startPoint;
 const startChangingColor = function(){
     if(!startPoint){
       startPoint = setInterval(changeBgColor,1000)
     }
     function changeBgColor(){
       body.style.backgroundColor = randomColor();
     }
 }
 const stopChangingColor = function(){
   clearInterval(startPoint)
   startPoint = null;   /// use to free the memory
 }
 document.querySelector("#start").addEventListener("click",startChangingColor)
 document.querySelector("#stop").addEventListener("click",stopChangingColor)
 