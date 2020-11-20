var allQuestions = document.querySelectorAll(".vraag")
var allAnswers = document.querySelectorAll(".antwoord")

function nextQuestion(el, direction) {
    if (!el) currentQuestion = parseInt(document.querySelector("div.vragen").getAttribute("data-current-question"));
    else var currentQuestion = parseInt(el.parentNode.getAttribute("data-current-question"));

    document.querySelector(".bigbutton.volgende").classList.remove("show");
    document.querySelector("div.titels").classList.remove("antwoord");


    if (direction == "right") currentQuestion--;
    else currentQuestion++;


    if (currentQuestion < 1) currentQuestion = 1;
    if (currentQuestion > allQuestions.length) currentQuestion = allQuestions.length;

    if (!el) document.querySelector("div.vragen").setAttribute("data-current-question", currentQuestion);
    else el.parentNode.setAttribute("data-current-question", currentQuestion);

    var i;
    for (i = 0; i < allQuestions.length; i++) {
        allQuestions[i].classList.remove("active");
        allAnswers[i].classList.remove("active");
        allQuestions[i].classList.remove("hide");
        allAnswers[i].classList.add("hide");

        if (allQuestions[i].getAttribute("data-question") == currentQuestion) {
            allQuestions[i].classList.add("active")
            allAnswers[i].classList.add("active")
        }
    }
    localStorage.setItem("question", currentQuestion);
}

function toonAntwoord(el) {
    var currentQuestion = parseInt(document.querySelector("div.vragen").getAttribute("data-current-question"));
    var i;
    console.log(currentQuestion);
    for (i = 0; i < allQuestions.length; i++) {
        allQuestions[i].classList.remove("hide");
        allAnswers[i].classList.add("hide");

        if (allQuestions[i].getAttribute("data-question") == currentQuestion) {
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
    el.parentNode.querySelector("span").setAttribute("data-score", score);
    el.parentNode.querySelector("span").textContent = score;
    var teamnr = el.parentNode.getAttribute("data-team");
    localStorage.setItem("team " + teamnr, score);
}

function subtractScore(el) {
    var score = el.parentNode.querySelector("span").getAttribute("data-score");
    score--;
    el.parentNode.querySelector("span").setAttribute("data-score", score);
    el.parentNode.querySelector("span").textContent = score;
    var teamnr = el.parentNode.getAttribute("data-team");
    localStorage.setItem("team " + teamnr, score);
}

function playAudio() {
    var snd = new Audio("buzzer.mp3");
    snd.play();
    snd.currentTime = 0;
}

function updateAllData() {
    var currentQ = localStorage.getItem("question"),
        team1 = localStorage.getItem("team 1"),
        team2 = localStorage.getItem("team 2"),
        team3 = localStorage.getItem("team 3"),
        team4 = localStorage.getItem("team 4"),
        team5 = localStorage.getItem("team 5");


    var allScores = document.querySelectorAll("section.teams .score"), i;
    allScores[0].textContent = team1;
    allScores[1].textContent = team2;
    allScores[2].textContent = team3;
    allScores[3].textContent = team4;
    allScores[4].textContent = team5;
    allScores[0].setAttribute("data-score", team1);
    allScores[1].setAttribute("data-score", team2);
    allScores[2].setAttribute("data-score", team3);
    allScores[3].setAttribute("data-score", team4);
    allScores[4].setAttribute("data-score", team5);

    var currentQuestion = localStorage.getItem("question"),
     i;
    for (i = 0; i < allQuestions.length; i++) {
        allQuestions[i].classList.remove("active");
        allAnswers[i].classList.remove("active");
        allQuestions[i].classList.remove("hide");
        allAnswers[i].classList.add("hide");

        if (allQuestions[i].getAttribute("data-question") == currentQuestion) {
            allQuestions[i].classList.add("active")
            allAnswers[i].classList.add("active")
        }
    }
    document.querySelector('div.vragen').setAttribute("data-current-question", currentQuestion);
}

updateAllData();