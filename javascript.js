function getComputerChoice(num) {
    if (num ===1) {
        return "rock";
    } else if (num ===0) {
        return "paper";     
    } else if (num <1) {
        return "scissors";
    }
}
console.log(getComputerChoice(0));
console.log(getComputerChoice(1));
console.log(getComputerChoice(0.5));