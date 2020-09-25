


//grabbing HTML elements
var header = document.getElementById("header").innerHTML
var smTxt = document.getElementById("smTxt").innerHTML


//random character array
var chars = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "?"]

var selectedSym = null //defined global so it can be used later

function randomsym() {
    var rightAns = chars[Math.floor(Math.random() * 10)]  //calculating random char outside of loop so it is shared between all 9 multiples
    var str = "";
    for (i = 0; i <= 99; i++) {
        if (i % 9) {
            var ree = chars[Math.floor(Math.random() * 10)] //calculating a random char for ever # not divisible by 9
            str = str + i + " - " + ree + "<br>" //pushing to string 

        }
        else {
            str = str + i + " - " + rightAns + "<br>" // pushing to string
            selectedSym = rightAns  //returning the shared character to the global to use later
        }
    }
    str = str
    return str;
}
//state change functions
var state = 1
function nextState() {
    state++
    updateView()
}
function resetState() {
    state = 1
    updateView()
}


//state changes
function updateView() {
    if (state == 1) {
        document.getElementById("header").innerHTML = "I can read your mind"
        document.getElementById("smTxt").innerHTML = ""
        document.getElementById("btn2").style.visibility = "hidden"
        document.getElementById("btn1").style.visibility = "initial"
        document.getElementById("pic").style.display = "none"
    }
    else if (state == 2) {
        document.getElementById("header").innerHTML = "Pick a number from 01-99"
        document.getElementById("smTxt").innerHTML = "when you have your answer click next"
        document.getElementById("btn2").style.visibility = "initial"
        document.getElementById("btn1").style.visibility = "initial"
        document.getElementById("pic").style.display = "none"
    }
    else if (state == 3) {
        document.getElementById("header").innerHTML = "Add both digits together to get a new number"
        document.getElementById("smTxt").innerHTML = "Ex: 14 is 1 + 4 = 5 <br>click next to proceed"
        document.getElementById("btn2").style.visibility = "initial"
        document.getElementById("btn1").style.visibility = "initial"
        document.getElementById("pic").style.display = "none"
    }
    else if (state == 4) {
        document.getElementById("header").innerHTML = "Subtract your new number from the original number"
        document.getElementById("smTxt").innerHTML = "Ex: 14 - 5 = 9<br>click next to proceed "
        document.getElementById("btn2").style.visibility = "initial"
        document.getElementById("btn1").style.visibility = "initial"
        document.getElementById("pic").style.display = "none"
    }
    else if (state == 5) {
        var str = randomsym()
        document.getElementById("header").innerHTML = str;
        document.getElementById("smTxt").innerHTML = "Find your new number.<br>Note the symbol beside the number"
        document.getElementById("btn2").style.visibility = "initial"
        document.getElementById("btn1").style.visibility = "initial"
        document.getElementById("pic").style.display = "none"
    }
    else if (state == 6) {
        document.getElementById("header").innerHTML = "HMMMMMMMMMM"
        document.getElementById("smTxt").innerHTML = ""
        document.getElementById("btn2").style.visibility = "hidden"
        document.getElementById("btn1").style.visibility = "initial"
        document.getElementById("pic").style.display = "inline-block"
        document.getElementById("pic").src = "./img/giphy.gif";
    }
    else if (state == 7) {
        document.getElementById("header").innerHTML = selectedSym
        document.getElementById("smTxt").innerHTML = "your symbol is: <br>" + selectedSym
        document.getElementById("btn2").style.visibility = "initial"
        document.getElementById("btn1").style.visibility = "hidden"
        document.getElementById("pic").style.display = "inline-block"
        document.getElementById("pic").src = "./img/giphy (1).gif";
    }
}
updateView()
