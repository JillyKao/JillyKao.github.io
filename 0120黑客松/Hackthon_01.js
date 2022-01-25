var result = Math.floor(Math.random() * 100);
        var small = 0;
        var big = 100;;
        var times = 0;

        var Hint = document.getElementById("Hint");
        var InputValue = document.getElementById("InputValue");
        var GuessNumber = document.getElementById("GuessNumber");
        var Back = document.getElementById("Back");






        GuessNumber.onclick = function () {
            var n = InputValue.value;
            InputValue.value = "";

            console.log("times =" + times);
            if (times <= 5) {
                if (result == n) {
                    var TextCorrect = "你猜對了!!<br/>你總共猜了" + times + "次";
                    Hint.innerHTML = TextCorrect;
                }
                else if (n > result) {
                    times += 1;
                    if (n < big) {
                        big = n;
                    }
                    var TextSmaller = "再猜小一點,你總共猜了" + times + "次<br/>在" + small + "和" + big + "之間";
                    Hint.innerHTML = TextSmaller;
                }
                else if (n < result) {
                    if (n > small) {
                        small = n;
                    }
                    times += 1;
                    var TextBigger = "再猜大一點,你總共猜了" + times + "次<br/>在" + small + "和" + big + "之間";
                    Hint.innerHTML = TextBigger;
                }
            }
            if (times >= 5) {
                alert("你超過5次了 失敗!!");
            }
        }

        var Back = document.getElementById("Back");
        Back.onclick = function () {
            var stringmin = InputValue.value.slice(0, -1);
            InputValue.value = stringmin;
        }

        var buttons = document.getElementsByTagName("button");
        for (var i = 0; i <= buttons.length; i++) {
            var button = buttons[i];
            button.onclick = function () {
                var btn = event.srcElement;
                document.getElementById("InputValue").value += btn.innerText;
            }
        }