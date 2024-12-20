const ratingCard = document.querySelector('.rating-card')
const ratingInputs = document.getElementsByName('rating')
const ratingSelected = document.querySelector('#selected-rating')
const thankCard = document.querySelector('.thank-card')
const form = document.querySelector('.rating-card-form')
const error = document.querySelector('.error')

let rrorExists =false;

function getRatingNumber(){
    for(let radio of ratingInputs) {
        if(radio.checked){
            let ratingNumber = radio.value
            return ratingNumber;
        }
    }
}

function thankMessage(){
    ratingCard.classList.add('rating-card-disabled')
    thankCard.classList.add('thank-card-active')
    ratingSelected.innerText = getRatingNumber();
    
}

function errorMessage(){   
    if(!rrorExists){
        const error =  document.createElement('p')
        error.classList.add('error')
        error.innerText = 'Please selecting a number'
        ratingCard.appendChild(error)
        rrorExists = true;
    }else return null    
}


function validation(){
    if(getRatingNumber()){
        thankMessage()
    }else{
        errorMessage(rrorExists)
    }
}

const handelSubmit = (e)=>{
    e.preventDefault() 
    validation()
}

form.addEventListener('submit' , handelSubmit)
