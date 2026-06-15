const speech = document.getElementById("speech");
const timer = document.getElementById("timer");
const character = document.getElementById("character");

const joke = {

    question : "낙타의 엄마는?",

    answer : "늑대!",

    explain : "(늑대가 낙타났다!)"
};

speech.textContent = joke.question;

let count = 10;

const interval = setInterval(() => {

    count--;

    timer.textContent = count;

    if(count <= 0){

        clearInterval(interval);

        timer.style.display = "none";

        speech.innerHTML = `
            <div>${joke.answer}</div>
            <div style="
                font-size:1rem;
                margin-top:10px;
                font-weight:normal;
            ">
                ${joke.explain}
            </div>
        `;

        character.src =
        "images/character-laugh.png";
    }

},1000);
