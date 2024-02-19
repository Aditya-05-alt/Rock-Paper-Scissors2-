let userscr = 0; 
let compscr = 0;

const choice = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const usrScr1 = document.querySelector("#you")
const CompScr1 = document.querySelector("#comp")

const genCompChc = () =>{
    let choice = ["rock","paper","scissor"]
    // Use of Random Number to generate the choice
    const randIDx = Math.floor(Math.random()*3)
    return choice[randIDx]
}
const DrawGame = ()=>{
    // console.log("Game Was Draw")
    msg.innerText = `Game Was Draw! Restart the game`
    msg.style.backgroundColor = "Black"
}
showWinner = (userWin, UserChoice, CompChoice) =>{
    if(userWin)
    {   userscr++
        usrScr1.innerText = `User: ${userscr}`
        // console.log('You Won')
        msg.innerText = `You Win! ${UserChoice} beats ${CompChoice}`
        msg.style.backgroundColor = "Green"
    }
    else {
        compscr++
        CompScr1.innerText = `PC: ${compscr}`
        msg.innerText = `You Loose! ${CompChoice} beats ${UserChoice}`
        msg.style.backgroundColor = "Red"
        console.log('Computer Won')
    }
}
const PlayGame = (UserChoice)=>{
    //USer Choice 
    console.log("User Choice :",UserChoice)
    const CompChoice = genCompChc()
    console.log("Computer Choice :",CompChoice)
    // Computer Choice
    if (UserChoice === CompChoice) {
        DrawGame();
    } 
    else{  
    let userWin = true 
        if (UserChoice === 'rock') {
        //comp choices are paper and scissor
       userWin = CompChoice === 'paper'? false : true;
    } else if(UserChoice === 'paper') 
    //comp scissor and rock
        userWin = CompChoice === 'scissor'? false : true;
    else if(UserChoice === 'scissor')
    // comp rock and Paper
        userWin = CompChoice === 'rock'? false : true;
    showWinner(userWin, UserChoice, CompChoice);
}
}  
const chc = document.querySelectorAll(".choice")
chc.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const UserChoice = choice.getAttribute("id")
        // console.log("Clicked","Choice Id is:",UserChoice)
        PlayGame(UserChoice);

    })
})
