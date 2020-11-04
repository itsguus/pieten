var allQuestions = document.querySelectorAll(".vraag")
var allAnswers = document.querySelectorAll(".antwoord")

function nextQuestion(el, direction) {
    if(!el)  currentQuestion = parseInt(document.querySelector("div.vragen").getAttribute("data-current-question"));
    else var currentQuestion = parseInt(el.parentNode.getAttribute("data-current-question"));
    
    document.querySelector(".bigbutton.volgende").classList.remove("show");
    document.querySelector("div.titels").classList.remove("antwoord");


    if(direction == "right") currentQuestion--;
    else currentQuestion++;
  

    if (currentQuestion < 1) currentQuestion = 1;
    if (currentQuestion > allQuestions.length) currentQuestion = allQuestions.length;

    if(!el) document.querySelector("div.vragen").setAttribute("data-current-question", currentQuestion);
    else el.parentNode.setAttribute("data-current-question", currentQuestion);

    var i;
    for(i=0; i< allQuestions.length; i++) {
        allQuestions[i].classList.remove("active");
        allAnswers[i].classList.remove("active");
        allQuestions[i].classList.remove("hide");
        allAnswers[i].classList.add("hide");

        if(allQuestions[i].getAttribute("data-question") == currentQuestion ) {
            allQuestions[i].classList.add("active")
            allAnswers[i].classList.add("active")
        }
    }
}

function toonAntwoord(el) {
    var currentQuestion = parseInt(document.querySelector("div.vragen").getAttribute("data-current-question"));
    var i;
    console.log(currentQuestion);
    for(i=0; i< allQuestions.length; i++) {
        allQuestions[i].classList.remove("hide");
        allAnswers[i].classList.add("hide");

        if(allQuestions[i].getAttribute("data-question") == currentQuestion ) {
            allQuestions[i].classList.add("hide")
            allAnswers[i].classList.remove("hide")
        }
    }
    document.querySelector("div.titels").classList.add("antwoord");
    document.querySelector(".bigbutton.volgende").classList.add("show");
}
function addScore(el) {
    var score = el.parentNode.querySelector("span").getAttribute("data-score");
    score++; 
    el.parentNode.querySelector("span").setAttribute("data-score",score);
    el.parentNode.querySelector("span").textContent = score;
}

function subtractScore(el) {
    var score = el.parentNode.querySelector("span").getAttribute("data-score");
    score--; 
    el.parentNode.querySelector("span").setAttribute("data-score",score);
    el.parentNode.querySelector("span").textContent = score;
}