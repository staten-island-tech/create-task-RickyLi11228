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
    let response;
    const randomnumber = Math.floor(Math.random() * 3) + 1;
    if (randomnumber === 1) {
        response = "rock";
    } else if (randomnumber === 2) {
        response = "paper";
    } else if (randomnumber === 3) {
        response = "scissors";
    }
    const userChoice = DOMSelectors.input.value.toLowerCase();
    if ((userChoice === 'rock' && response === 'paper') ||
        (userChoice === 'paper' && response === 'scissors') ||
        (userChoice === 'scissors' && response === 'rock')) {
        print('You lose');
        array.push('lost');
    } else if ((userChoice === 'scissors' && response === 'paper') ||
        (userChoice === 'rock' && response === 'scissors') ||
        (userChoice === 'paper' && response === 'rock')) {
        print('You won');
        array.push('win');
    } else if (userChoice === response) {
        print('You draw');
        array.push('tie');
    } else {
        print('Error, check your spelling');
    }
    print(response)
    DOMSelectors.input.value = "";
});
DOMSelectors.history.addEventListener("click", function() {
    print("Your history 🤓🤓🤓 :")
    print(array)
})