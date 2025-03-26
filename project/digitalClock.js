// By using querySelector
// const selectClock = document.querySelector("#clock")
// setInterval(function(val){
//     const date = new Date();
//     selectClock.innerHTML = date.toLocaleTimeString();
// },1000)

// By using getElementId
const selectClock = document.getElementById("clock")
setInterval(function(val){
    const date = new Date();
    selectClock.innerHTML = date.toLocaleTimeString();
},1000)