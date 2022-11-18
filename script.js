const button = document.querySelector('.btn');
const changeColor1 = document.querySelector('.color1');
const changeColor2 = document.querySelector('.color2');
const changeColor3 = document.querySelector('.color3');
const changeColor4 = document.querySelector('.color4');
const changeColor5 = document.querySelector('.color5');
const changeColor6 = document.querySelector('.color6');
const changeColor7 = document.querySelector('.color7');
const changeColor8 = document.querySelector('.color8');
const changeColor9 = document.querySelector('.color9');
const changeColor10 = document.querySelector('.color10');

button.addEventListener('click', result);

const correctAnswer = document.querySelector('.correct1');
const correctAnswer2 = document.querySelector('.correct2');
const correctAnswer3 = document.querySelector('.correct3');
const correctAnswer4 = document.querySelector('.correct4');
const correctAnswer5 = document.querySelector('.correct5');
const correctAnswer6 = document.querySelector('.correct6');
const correctAnswer7 = document.querySelector('.correct7');
const correctAnswer8 = document.querySelector('.correct8');
const correctAnswer9 = document.querySelector('.correct9');
const correctAnswer10 = document.querySelector('.correct10');


function result(e){
    e.preventDefault();

    let points = 0;
    if(document.querySelector("#answerOne").checked){
        points++;  
    }
    
   if(document.querySelector("#answerTwo").checked){
        points++;
      
    }
   if(document.querySelector("#answerThree").checked){
        points++;
    }
   if(document.querySelector("#answerFour").checked){
        points++;
    }
    if(document.querySelector("#answerFive").checked){
        points++;
    }
   if(document.querySelector("#answerSix").checked){
        points++;
    }
    if(document.querySelector("#answerSeven").checked){
        points++;
    }
    if(document.querySelector("#answerEight").checked){
        points++;
    }
    if(document.querySelector("#answerNine").checked){
        points++;
    }
    if(document.querySelector("#answerTen").checked){
        points++;
    }

    document.querySelector('.show').textContent = "You have " + points + " correct answer(s) out of 10";
    correctAnswer.style.display = 'block';
    correctAnswer2.style.display = 'block';
    correctAnswer3.style.display = 'block';
    correctAnswer4.style.display = 'block';
    correctAnswer5.style.display = 'block';
    correctAnswer6.style.display = 'block';
    correctAnswer7.style.display = 'block';
    correctAnswer8.style.display = 'block';
    correctAnswer9.style.display = 'block';
    correctAnswer10.style.display = 'block';

    changeColor1.classList.add("color");
    changeColor2.classList.add("color");
    changeColor3.classList.add("color");
    changeColor4.classList.add("color");
    changeColor5.classList.add("color");
    changeColor6.classList.add("color");
    changeColor7.classList.add("color");
    changeColor8.classList.add("color");
    changeColor9.classList.add("color");
    changeColor10.classList.add("color");
}

//animation
gsap.from('.question1', {x:-200, delay:1, duration  :2, opacity:0})
gsap.from('.question3', {x:-200, delay:2, duration  :2, opacity:0})
gsap.from('.question5', {x:-200, delay:3, duration  :2, opacity:0})
gsap.from('.question7', {x:-200, delay:4, duration  :2, opacity:0})
gsap.from('.question9', {x:-200, delay:5, duration  :2, opacity:0})

gsap.from('.question2', {x:200, delay:1.5, duration:2, opacity:0})
gsap.from('.question4', {x:200, delay:2.5, duration:2, opacity:0}) 
gsap.from('.question6', {x:200, delay:3.5, duration:2, opacity:0}) 
gsap.from('.question8', {x:200, delay:4.5, duration:2, opacity:0}) 
gsap.from('.question10', {x:200, delay:5.5, duration:2, opacity:0})   