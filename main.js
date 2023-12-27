let playGame = confirm("Do you want to play game");

if(playGame)
{

    while(playGame)
    {
        
    let player_choice = prompt("choose your option");

    if(player_choice || player_choice === "")
    {
        let player = player_choice.trim().toLowerCase();

        if(player === "rock" || player === "paper" || player === "scissor")
        {
            let computer_Choice = Math.floor(Math.random());

            let gpaArray = ["rock","paper","scissor"];

            let computer = gpaArray[computer_Choice];

            let result =   (player === computer) ? "tie" : (player === "rock" && computer === "paper") ?  `player : ${player} \n computer : ${computer}\n computer wins` : (player === "paper" && computer === "scissor") ?  `player : ${player} \n computer : ${computer} \n computer wins`:  `player : ${player} \n computer : ${computer} \n player wins`;

            alert(result);

            
             playGame = confirm("Do you want play again");
             
             if(!playGame)
             {

             alert("Thank for playing");
             continue;
             }

            

        }
        else
             {

                alert("you didn't enter correct option")
                continue;
             }
      

    }
    else
    {
        alert("you change your mind may you play later")
        break;
    }
}

}
else
{
    alert("may be next time")
   
}
