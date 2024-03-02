const DOMSelectors = {
    form: document.querySelector("#form"),
    input: document.querySelector("#input"),
    button: document.getElementById("btn"),
    history: document.querySelector("#history"),
};
array = []
function print(thing){
    DOMSelectors.form.insertAdjacentHTML("beforeend",
     `<div>${thing}</div>`);
}
DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
});
DOMSelectors.button.addEventListener("click", function() {
    const userChoice = DOMSelectors.input.value.toLowerCase();
    function appender(){
        array.push(`(${outcome}) You used: ${userChoice}, Computer used: ${response}`);
    }
    let response;
    const randomnumber = Math.floor(Math.random() * 3) + 1;
    if (randomnumber === 1) {
        response = "Rock";
    } else if (randomnumber === 2) {
        response = "Paper";
    } else if (randomnumber === 3) {
        response = "Scissors";
    }
    function results (you, computer){
    if ((you === 'rock' && computer === 'Paper') ||
        (you === 'paper' && computer === 'Scissors') ||
        (you === 'scissors' && computer === 'Rock')) {
        print('You lost')
        outcome = "Lose"
        appender();
    } else if ((you === 'scissors' && computer === 'Paper') ||
        (you === 'rock' && computer === 'Scissors') ||
        (you === 'paper' && computer === 'Rock')) {
        print('You won');
        outcome = "Win"
        appender();
    } else if (you === computer.toLowerCase()) {
        print('You draw');
        outcome = "Draw"
        appender();
    } else {
        print('Error, check your spelling');
    }
    print(response)
    DOMSelectors.input.value = "";
}
    results(userChoice, response);
});
DOMSelectors.history.addEventListener("click", function() {
    print("Your history: ")
    print(array)
})