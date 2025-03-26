const selectForm = document.querySelector("form");

selectForm.addEventListener("submit", (e) =>{
    e.preventDefault();   //  prevent the data to submit on sever side....becaz there is no server side
    const height = parseInt(document.querySelector("#height").value )
    const weight = parseInt(document.querySelector("#weight").value)
    const res = document.querySelector("#results") 
    
    // checks uses so that ---> code fate na kahi pe
    if(height === '' || height < 0 || isNaN(height)){
      res.innerHTML = `Please give a valid height ${height}`
    }
    else if(weight === ''|| weight < 0 || isNaN(weight)){
      res.innerHTML == `Please give a valid weight ${weight}`
    }

    // show the result 
    // formula to calculate bmi
    const bmi = (weight / ((height * height) / 10000))
    if(bmi < 18.6){
      res.innerHTML = `You are under weight,bmi is: ${bmi}`
    }
    else if(bmi >= 18.6 && bmi <=  24.9){
      res.innerHTML = `You are in Normal Range,bmi is: ${bmi}`
    }
    else{
      res.innerHTML = `You are over weight,bmi is: ${bmi}`
    }
})