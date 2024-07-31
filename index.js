let player1score = 0
let player2score = 0
let oneplayer = document.getElementById("1player")
let twoplayer = document.getElementById("2player")
let newBtn =  document.getElementById("newbtn")

function plusone(){
    player1score += 1
    oneplayer.textContent = player1score
}

function plustwo(){
    player1score += 2
    oneplayer.textContent = player1score
}

function plusthree(){
    player1score += 3
    oneplayer.textContent = player1score
}

function plusoneii(){
    player2score += 1
    twoplayer.textContent = player2score
}

function plustwoii(){
    player2score += 2
    twoplayer.textContent = player2score
}

function plusthreeii(){
    player2score += 3
    twoplayer.textContent = player2score
}

function newGame(){
   player1score = 0
   player2score = 0
   oneplayer.textContent = 0
   twoplayer.textContent = 0
}



