let computerScore = 0;
let userScore = 0;

const computerScore_span = document.getElementById("computerScore");
const userScore_span = document.getElementById("userScore");

const scoreBoard_div = document.querySelector(".scoreBoard");

const result_div = document.querySelector(".result");

const liz_div = document.getElementById("liz");
const spk_div = document.getElementById("spk");
const rck_div = document.getElementById("rck");
const scis_div = document.getElementById("scis");
const pap_div = document.getElementById("pap");

//Above is caching the DOM

//Do not forget to add to the html file, took a while to figure out i forgot to src it

function convertWord(word){
  if (word === "liz") return "Lizard";
  if (word === "spk") return "Spock";
  if (word === "rck") return "Rock";
  if (word === "scis") return "Scissors";
  if (word === "pap") return "Paper";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_div.innerHTML = `WIN, user chose ${convertWord(userChoice)} -- computer chose ${convertWord(computerChoice)}`;
   
}

//I need to add unique description for each identifier

function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;

    result_div.innerHTML = `LOSE, user chose ${convertWord(userChoice)} -- computer chose ${convertWord(computerChoice)}`;
}


const getComputerChoice = function(){

    const choices = ['liz', 'spk', 'rck', 'scis', 'pap'];
    const randomNumber = Math.floor(Math.random()*5);
    return choices[randomNumber];

}

const game = function(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "spkscis":
        case "spkrck":
        case "scispap":
        case "scisliz":
        case "papspk":
        case "paprck":
        case "rckliz":
        case "rckscis":
        case "lizspk":
        case "lizpap":
            win(userChoice, computerChoice);
            break;
        case "lizliz":
        case "spkspk":
        case "scisscis":
        case "pappap":
        case "rckrck":
            result_div.innerHTML = "DRAW!";
            break;
        default:
            lose(userChoice, computerChoice);
    }
}

function main(){

    liz_div.addEventListener('click', () => {
        game("liz");
    })
    spk_div.addEventListener('click', () => {
        
        game("spk");
    })
    rck_div.addEventListener('click', () => {
        game("rck");
        
    })
    scis_div.addEventListener('click', () => {
        
        game("scis");
    })
    pap_div.addEventListener('click', () => {
       
        game("pap");
    })
}

main();




