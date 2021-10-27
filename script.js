 let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById('user-score');
const computerScore_span=document.getElementById('computer-score');
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result>p");
const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissors_div=document.getElementById('s');

function getComputerChoice(){
	const choices=['r', 'p', 's'];
	const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
} 

function convert(letter){
	if(letter== "r") return "Rock";
	if(letter== "p") return "Paper";
	return "Scissors";

}                   
function win(userchoice,computerChoice){
	
	userScore++;
	userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML=computerScore;
	result_p.innerHTML=convert(userchoice)+"    (user)" + "     beats      " + convert(computerChoice) +"    (comp)"+ "  YOU WIN WHOOO!";

	}
function lose(userchoice,computerChoice){
	computerScore++;
	userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML=computerScore;
	result_p.innerHTML=convert(userchoice)+"    (user)" + "     loses to     " + convert(computerChoice) +"    (comp)"+ " UMM YOU LOSE !";



}
function draw(userchoice,computerChoice){
	result_p.innerHTML=convert(userchoice)+"    (user)" + "     equals to     " + convert(computerChoice) +"    (comp)"+ " IT'S A DRAW!";


	
}

function game(userchoice){
	const computerChoice = getComputerChoice();
	switch(userchoice+computerChoice){
		case "rs":
		case "pr":
		case "sp":
		   win(userchoice,computerChoice);
		   break;
		case "rp":
		case "ps":
		case "sr":
		 lose(userchoice,computerChoice);
		 break;
		case "rr":
		case "pp":
		case "ss": 
		 draw(userchoice,computerChoice);
		 break;
	}
	
}
  
	rock_div.addEventListener('click', function(){
		game("r");
	})
	paper_div.addEventListener('click', function(){
		game("p");
	})
	scissors_div.addEventListener('click', function(){
		game("s");
	})


 
