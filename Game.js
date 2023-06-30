var playerid = 0
let score = [0,0]

function Rolldice(){

    var randomno1 = Math.floor(Math.random()*6)+1;
    var randomno2 = Math.floor(Math.random()*6)+1;

    document.getElementById('dice1').src = "dice_" + randomno1 + ".png"
    document.getElementById('dice2').src = "dice_" + randomno2 + ".png"
    
    if((randomno1==randomno2)&&(randomno1==1)){
        if(playerid==0){
            score[0]=0
            playerid=1
        }
        else{
            score[1]=0
            playerid =0
        }
    }
    else if((randomno1==randomno2)&&(randomno1!=1)){
        if(playerid==0){
            score[0] = score[0] + randomno1 + randomno2
            playerid = 0         
        }
        else{
            score[1] = score[1] + randomno1 + randomno2
            playerid = 1
        }
    }
    else{
        if(playerid==0){
            score[0] = score[0] + randomno1 + randomno2
            playerid = 1
        }
        else{
            score[1] = score[1] + randomno1 + randomno2
            playerid = 0
        }
    }  


    if(score[0]>=100){
        document.getElementById('player-1').innerHTML = score[0]
        document.getElementById('winner1').innerHTML = "Player 1 is the Winner"
        document.getElementById('roll').disabled = true
    }
    else if(score[1]>=100){
        document.getElementById('player-2').innerHTML = score[1]
        document.getElementById('winner1').innerHTML = "Player 2 is the Winner"
        document.getElementById('roll').disabled = true
    }
    else{
        document.getElementById('player-1').innerHTML = score[0]
        document.getElementById('player-2').innerHTML = score[1]
    }

}
    

    

