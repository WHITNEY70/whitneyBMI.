const form = document.querySelector ('form')
const height_input =document.querySelector('.height');
const weight_input = document.querySelector('.weight');

const result = document.querySelector ('.result');
const close = document.querySelector ('.close-btn');

//click

form.addEventListener('submit', function(e){

    e.preventDefault();
    
    let height = parseInt(height_input.value);
    let weight = parseInt(weight_input.value);


    if (height == '' || height < 0 || isNaN(height)){
        alert("please enter a valid height");
        height_input.focus();
    }else if (weight == ''|| weight < 0 || isNaN (weight)){
        alert("please enter a valid weight");
        weight_input.focus();
    }else{
        const bmi = (weight / ( (height * height))).toFixed(2);//bmi fomular
        alert(bmi);

        if (bmi < 25){
            alert("you are underweight");
        }else if(bmi >= 25 && bmi < 30){
            alert("you have a healthy weight");
        }else{
            alert("you are overweight");
        }
        
        
    }   
})

