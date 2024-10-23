function playGame(userChoice) {
    let choices = ['batu', 'gunting', 'kertas'];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (userChoice === computerChoice) {
        result = "Kita seri!";
    } else if (
        (userChoice === 'batu' && computerChoice === 'gunting') ||
        (userChoice === 'gunting' && computerChoice === 'kertas') ||
        (userChoice === 'kertas' && computerChoice === 'batu')
    ) {
        result = "Kamu menang!";
    } else {
        result = "Kamu kalah!";
    }

    document.getElementById("gameResult").textContent = `Komputer milih ${computerChoice}. ${result}`;
}
