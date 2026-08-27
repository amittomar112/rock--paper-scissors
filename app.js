let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg  = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock" ,"paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    // rock ,paper,scissors
};

const drawgame = () => {
    msg.innerText = "game was Draw. play again.";
    msg.style.backgroundColor = "#081b31"
};

const showwinner = (userwin ,userchoice,compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `you win! Your ${userchoice} beats ${compchoice} `;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `you lose. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    const compchoice = gencompchoice ();
    //generate computer choice


    if (userchoice === compchoice) {
        //drawGame
        drawgame();
    } else {
      let userwin = true;
      if(userchoice === "rock"){
        //scissors, paper
        userwin = compchoice === "paper" ? false : true;
      }  else if(userchoice === "paper"){
        //rock ,scissors
        userwin = compchoice ==="scissors" ? false: true;
      } else{
        // rock, paper 
        userwin = compchoice === "rock" ? false : true;
      }
      showwinner(userwin, userchoice, compchoice);
    }
};  

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
