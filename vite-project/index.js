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
        response = "Rock";
    } else if (randomnumber === 2) {
        response = "Paper";
    } else if (randomnumber === 3) {
        response = "Scissors";
    }
    const userChoice = DOMSelectors.input.value.toLowerCase();
    if ((userChoice === 'rock' && response === 'Paper') ||
        (userChoice === 'paper' && response === 'Scissors') ||
        (userChoice === 'scissors' && response === 'Rock')) {
        print('You lose');
        array.push(' Lost');
    } else if ((userChoice === 'scissors' && response === 'Paper') ||
        (userChoice === 'rock' && response === 'Scissors') ||
        (userChoice === 'paper' && response === 'Rock')) {
        print('You won');
        array.push(' Win');
    } else if (userChoice === response.toLowerCase()) {
        print('You draw');
        array.push(' Tie');
    } else {
        print('Error, check your spelling');
    }
    print(response)
    DOMSelectors.input.value = "";
});
DOMSelectors.history.addEventListener("click", function() {
    print("Your history: ")
    print(array)
})