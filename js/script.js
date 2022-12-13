
const game = () =>{
    let pScore = 0;
    let cScore =0;

    const startGame = () =>{
        const playbtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playbtn.addEventListener("click", ()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn")
        });
    };
    const playMatch = () =>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
   

        const computerOptions =["rock","paper","scissors"];
        
        options.forEach(option=>{
            option.addEventListener('click',function(){
                //computer choice
                const computerNumber =Math.floor(Math.random()*3);
                const computerChoice =computerOptions[computerNumber];

                compareHands(this.textContent, computerChoice);

                //update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
               
            });
        });
    };
    const update = () =>{
        const playerScore =document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent =pScore;
        computerScore.textContent =cScore;

    };
    const compareHands = (playerChoice, computerChoice)=>{
        const winner = document.querySelector(".winner");
        if(playerChoice === computerChoice){
            winner.textContent ="its a tie";
            return;
        }
        //for rock
        if(playerChoice==="rock"){
            if(computerChoice==='scissors'){
                winner.textContent = "player Wins";
                pScore++;
                update();
                return
            }else{
                winner.textContent ="computer Wins";
                cScore++;
                update();
                return
            }
        }
        //for paper
        if(playerChoice==="paper"){
            if(computerChoice==='scissors'){
                winner.textContent = "computer Wins";
                cScore++;
                update();
                return
            }else{
                winner.textContent ="player Wins";
                pScore++;
                update();
                return
            }
        }
        if(playerChoice==="scissors"){
            if(computerChoice==='rock'){
                winner.textContent = "computer Wins";
                cScore++;
                update();
                return
            }else{
                winner.textContent ="player Wins";
                pScore++;
                update();
                return
            }
        }

    };

    startGame();
    playMatch();
};

game();