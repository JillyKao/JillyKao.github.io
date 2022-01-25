var answer = [];
var times = 0;
var A = 0;
var B = 0;
var input = [];

var CreateNumber = document.getElementById("CreateNumber");
CreateNumber.onclick = function () {
    answer = [];
    while (answer.length < 4) {
        var num = Math.floor(Math.random() * 9);
        if (answer.indexOf(num) == -1) {
            console.log("before" + answer);
            answer += num;
            console.log(answer);
        }
    }
}


var WatchAnswer = document.getElementById("WatchAnswer");
WatchAnswer.onclick = function () {
    alert(answer);
}

var Restart = document.getElementById("Restart");
Restart.onclick = function () {
    GuessArea.innerHTML = "";
}




var GuessButton = document.getElementById("GuessButton");
GuessButton.onclick = function () {
    var text = document.getElementById("inputText").value;
    for (var i = 0; i <= 3; i++) {
        input[i] = text[i];
    }


    for (var i = 0; i <= 3; i++) {
        console.log(A + "A" + B + "B");
        if (answer.indexOf(input[i]) != -1) {
            if (answer[i] == input[i]) {
                A = A + 1;
                console.log(A + "A" + B + "B");
            }
            else {
                B = B + 1;
                console.log(A + "A" + B + "B");
            }
        }
    }
    var value = (A + "A" + B + "B");

    var GuessArea = document.getElementById("GuessArea");

    if (A == 4 || A == "4") {
        var item = "<li class=\"list-group-item d-flex justify-content-between align-items-center listitembackcolor\"><span class=\"badge badge-success badge-pill pill-style\">" + A + "A" + B + "B" + "</span>" + text + "</li>";
        alert("你猜對了!");
    }
    else {
        var item = "<li class=\"list-group-item d-flex justify-content-between align-items-center listitembackcolor\"><span class=\"badge badge-secondary badge-pill pill-style errorcolor\">" + A + "A" + B + "B" + "</span>" + text + "</li>";
    }
    GuessArea.innerHTML += item;
    A = 0;
    B = 0;

}