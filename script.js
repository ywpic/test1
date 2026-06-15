const speech = document.getElementById("speech");
const timer = document.getElementById("timer");

let count = 10;

const interval = setInterval(() => {

    count--;

    timer.textContent = count;

    if(count === 0){

        clearInterval(interval);

        timer.style.display = "none";

        speech.innerHTML = `
            <div>
                <h2>늑대!</h2>
                <p>(늑대가 낙타났다!)</p>
            </div>
        `;
    }

},1000);
