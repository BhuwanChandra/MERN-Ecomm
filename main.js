

var t = document.querySelectorAll(".turn");
var turn = [[t[0], t[1], t[2]],
[t[3], t[4], t[5]],
[t[6], t[7], t[8]]];
var player = true;
var plyr1 = document.querySelector("#plyr1");
var plyr2 = document.querySelector("#plyr2");
var winplr = 0;
chance();

for (let i = 0; i < t.length; i++) {
    t[i].addEventListener("click", function () {
        move(Math.floor(i / 3), i % 3);
    });
    t[i].textContent = "";
}

reset();

function chance() {
    if (player) {
        plyr1.style.opacity = "1";
        plyr1.style.boxShadow = "3px 3px 3px grey";
        plyr2.style.opacity = ".5";
        plyr2.style.boxShadow = "none";
    } else {
        plyr2.style.opacity = "1";
        plyr2.style.boxShadow = "2px 2px 2px grey";
        plyr1.style.opacity = ".5";
        plyr1.style.boxShadow = "none";
    }
}
function move(i, j) {
    if ((turn[i][j].textContent != "X") && ((turn[i][j].textContent != "O") && (winplr == 0))) {
        if (player) {
            turn[i][j].textContent = "X";
        }
        else {
            turn[i][j].textContent = "O";
        }
        player = !player;
        chance();
        setTimeout(ifWon, 300);

    }
}
function won(x, y) {
    let msg = 0;
    winplr = 1;
    if (turn[x][y].textContent == "X") {
        msg = confirm("Player 1 WON!!! Want to reset the game?");
    } else {
        msg = confirm("Player 2 WON!!! Want to reset the game?");
    }
    if (msg) reset();
}
function ifWon() {
    if ((turn[0][0].textContent == turn[0][1].textContent && turn[0][0].textContent == turn[0][2].textContent) && (turn[0][0].textContent == "X" || turn[0][0].textContent == "O")) {
        won(0, 0);
    }
    if ((turn[0][0].textContent == turn[1][0].textContent && turn[0][0].textContent == turn[2][0].textContent) && (turn[0][0].textContent == "X" || turn[0][0].textContent == "O")) {
        won(0, 0);
    }
    if ((turn[0][0].textContent == turn[1][1].textContent && turn[0][0].textContent == turn[2][2].textContent) && (turn[0][0].textContent == "X" || turn[0][0].textContent == "O")) {
        won(0, 0);
    }
    if ((turn[1][1].textContent == turn[0][1].textContent && turn[1][1].textContent == turn[2][1].textContent) && (turn[0][1].textContent == "X" || turn[0][1].textContent == "O")) {
        won(0, 1);
    }
    if ((turn[0][2].textContent == turn[1][2].textContent && turn[2][2].textContent == turn[0][2].textContent) && (turn[0][2].textContent == "X" || turn[0][2].textContent == "O")) {
        won(0, 2);
    }
    if ((turn[1][0].textContent == turn[1][1].textContent && turn[1][0].textContent == turn[1][2].textContent) && (turn[1][0].textContent == "X" || turn[1][0].textContent == "O")) {
        won(1, 0);
    }
    if ((turn[2][0].textContent == turn[2][1].textContent && turn[2][0].textContent == turn[2][2].textContent) && (turn[2][0].textContent == "X" || turn[2][0].textContent == "O")) {
        won(2, 0);
    }
    if ((turn[0][2].textContent == turn[1][1].textContent && turn[2][0].textContent == turn[0][2].textContent) && (turn[2][0].textContent == "X" || turn[2][0].textContent == "O")) {
        won(2, 0);
    }
}

function reset() {
    winplr = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            turn[i][j].textContent = "";
        }
    }
    player = true;
    chance();
}
