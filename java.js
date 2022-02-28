const computerPlay = function(){
    let randomNum = Math.ceil(Math.random() * 3)
    
    if (randomNum == 1){
        return "Rock";
    }
    else if (randomNum == 2){
        return "Paper";
    }
    else if (randomNum == 3){
        return "Scissors";
    }

}

const userOption = function(num){
    if (num == 1){
        return "Rock";
    }
    else if (num == 2){
        return "Paper";
    }
    else if (num == 3){
        return "Scissors";
    }
}

const gameWinner = function(computerOption, userValue){
    if (userValue == "Rock" && computerOption == "Scissors"){
        console.log(`You Win! User ${userValue} beats Computer ${computerOption}`);
        return 1;
    }
    else if (userValue === "Paper" && computerOption === "Rock"){
        console.log(`You Win! User ${userValue} beats Computer ${computerOption}`);
        return 1;
    }
    else if (userValue === "Scissors" && computerOption === "Paper"){
        console.log(`You Win! User ${userValue} beats Computer ${computerOption}`);
        return 1;
    }
    else if(userValue == computerOption){
        console.log("Tie");
    }
    else{
        console.log(`You Lose! Computer ${computerOption} beats User ${userValue}`);
        return 2;
    }
}

let userScore = 0,
    computerScore = 0;

for (let i = 0; i < 5; i++){

    let computerOption = computerPlay();
    console.log (`Computer chose: ${computerOption}`);

    let userValue = userOption(window.prompt("Enter 1: Rock, 2: Paper, or 3: Scissors"));
    console.log(`User chose: ${userValue}`);

    let scoreValue = gameWinner(computerOption, userValue);
    if (scoreValue == 1){
        userScore++;
    }else if (scoreValue == 2){
        computerScore++;
    }
    
}

if (userScore > computerScore){
    console.log("5 Round Winner");
}else if(userScore < computerScore){
    console.log("5 Round Loser");
}else{
    console.log("5 Round Tie");
}