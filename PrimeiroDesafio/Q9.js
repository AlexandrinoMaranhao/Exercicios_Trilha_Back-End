let playerHP = 100;
let enemyTurn = 3;

function attack(){
    playerHP = playerHP - 20;
    return playerHP
}


for(i = 0; i < enemyTurn; i++){
    attack();
}

console.log("O seu personagem está com a seguinte quantidade de pontos de vida: " + playerHP);