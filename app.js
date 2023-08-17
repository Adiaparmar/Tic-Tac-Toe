console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let turnm = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

//function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0": "X"
}

//Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, -21, 5, 0],
        [3, 4, 5, -21, 15, 0],
        [6, 7, 8, -21, 25, 0],
        [0, 3, 6, -31.25, 15, 90],
        [1, 4, 7, -21.25, 15, 90],
        [2, 5, 8, -11.25, 15, 90],
        [0, 4, 8, -21.45, 15, 45],
        [2, 4, 6, -21.45, 15, 135],
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
            isgameover = true
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "170px"
            document.querySelector(".line").style.width = "24vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })

}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnm.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
            }
        }
    })
})


//Add onclick listener to reset
btn = document.querySelector(".reset");
btn.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
    document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "0px"
    
})