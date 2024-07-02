function getComputerChoice(){
    let x = Math.floor(Math.random() * 3);
    if(x===1){
    console.log("rock");
    return "rock";
}
else if(x===2){
     console.log("scissors");
    return "scissors";
}

else {
    console.log("paper");
    return "paper";
}
}
function getHumanChoice(){
    let user= prompt("enter your choice");
    
    return user.toLowerCase();
}
let humans=0;
let compus=0;
function playRound(human,computer){
    
    if(human=="paper" && computer =="rock")
        {
            humans++;
        }
    else if(human=="paper" && computer =="scissors")
        {
            compus++;
        }
    else if(human =="rock" &&computer=="paper"){
            compus++;
        }
    else if(human==="rock" && computer ==="scissors"){
        humans++;
    }
     else if (computer==="paper" && human ==="scissors"){
            humans++;
            
        }
        else if (computer==="rock" && human ==="scissors"){
            compus++;
        } 
}
function playgame(){
for (let i = 0; i < 5; i++) {
   let humann=getHumanChoice();
   let game=getComputerChoice();
   playRound(humann,game);
}
if(compus>humans)
    console.log("computer win with score:"+compus);
else if(compus<humans)
    console.log("humsn win with score:"+humans);
else
console.log("no win");
}
playgame();