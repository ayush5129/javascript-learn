// using if and function 

const selectButtons = document.querySelectorAll(".button");
const selectBody = document.querySelector("body");

selectButtons.forEach(function(val){
  // console.log(selectButtons);
  val.addEventListener("click",function(e){
      // console.log(e.target.id)
      if(e.target.id === 'grey'){
        selectBody.style.backgroundColor = e.target.id
      }
      if(e.target.id === 'white'){
        selectBody.style.backgroundColor = e.target.id
      }
      if(e.target.id === 'blue'){
        selectBody.style.backgroundColor = e.target.id
      }
      if(e.target.id === 'yellow'){
        selectBody.style.backgroundColor = e.target.id
      }
  })
})

// using switch and arrow function 

const selectButtons = document.querySelectorAll('.button');
const selectBody = document.querySelector('body');

selectButtons.forEach((val) => {
  val.addEventListener('click',  (e) => {
    const condition = e.target.id;
    switch (condition) {
      case 'grey':
        selectBody.style.backgroundColor = e.target.id;
      case 'white':
        selectBody.style.backgroundColor = e.target.id;
      case 'blue':
        selectBody.style.backgroundColor = e.target.id;
      case 'yellow':
        selectBody.style.backgroundColor = e.target.id;
    }
  });
});
