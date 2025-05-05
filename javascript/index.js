let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const genCompChoice=()=>{
const options=["rock","paper","scissors"];
const randIdx = Math.floor( Math.random()*3);
return options[randIdx];

};


const drawGame =() =>{
msg.innerText="Its a Draw , Play Again !";
msg.style.backgroundColor="lightBlue";

};

const showWinner=(userWin,userChoice,compChoice) =>{
    const userDiv = document.getElementById(userChoice);
    const compDiv = document.getElementById(compChoice);


if(userWin)
{
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`Congo You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    userDiv.classList.add("winner-glow");
    setTimeout(() => userDiv.classList.remove("winner-glow"), 800);

}
else{
compScore++;
compScorePara.innerText=compScore;
msg.innerText=` Aww You Lose! ${compChoice} beats your ${userChoice}`;
msg.style.backgroundColor="red";
compDiv.classList.add("winner-glow");
setTimeout(() => compDiv.classList.remove("winner-glow"), 800);


}
};

const playGame= (userChoice) =>{
const compChoice = genCompChoice();

if (userChoice===compChoice){
drawGame();
}
else{
let userWin=true;
if (userChoice==="rock"){
    userWin = compChoice==="paper"?false:true;
    }else if
        (userChoice==="paper"){
            userWin = compChoice==="scissors"?false:true;

        }else{

            userWin = compChoice==="rock"?false:true;  
        }
showWinner(userWin,userChoice,compChoice);
        
    }
};

choices.forEach((choice)=>{
// console.log(choice);
choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
playGame(userChoice);
});
});
