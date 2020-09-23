var header = document.getElementById("header").innerHTML

var smTxt = document.getElementById("smTxt").innerHTML

var chars = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "?"]

var state = 1

var selectedSym = null

var chars = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "?"]

function randomsym() {
    var rightAns = chars[Math.floor(Math.random() * 10)]
    var str = "<ul>";
    for (i = 0; i <= 99; i++) {
        if (i % 9) {
            var ree = chars[Math.floor(Math.random() * 10)]
            
            str = str + "<li>" + i + " - " + ree + "</li>"
            
        }
        else {
            str = str + "<li>" + +i + " - " + rightAns + "</li>"
            selectedSym = rightAns
        }
    }
    str = str + "</ul>"
    return str;
}
function nextState() {
    console.log(state)
    state++
    updateView()
}
function resetState() {
    state = 1
    updateView()
}
window.onhashchange = function() {
    state --
    updateView()
   }



function updateView() {
    if (state == 1) {
        document.getElementById("header").innerHTML = "I can read your mind"
        document.getElementById("smTxt").innerHTML = ""
        document.getElementById("btn2").style.visibility = "hidden"
        document.getElementById("btn1").style.visibility = "initial"
    }
    else if (state == 2) {
        document.getElementById("header").innerHTML = "Pick a number from 01-99"
        document.getElementById("smTxt").innerHTML = "when you have your answer click next"
        document.getElementById("btn2").style.visibility = "initial"
        document.getElementById("btn1").style.visibility = "initial"

    }
    else if (state == 3) {
        document.getElementById("header").innerHTML = "Add both digits together to get a new number"
        document.getElementById("smTxt").innerHTML = "Ex: 14 is 1 + 4 = 5 <br>click next to proceed"
        document.getElementById("btn2").style.visibility = "initial"
        document.getElementById("btn1").style.visibility = "initial"
    }
    else if (state == 4) {
        document.getElementById("header").innerHTML = "Subtract your new number from the original number"
        document.getElementById("smTxt").innerHTML = "Ex: 14 - 5 = 9<br>click next to proceed "
        document.getElementById("btn2").style.visibility = "initial"
        document.getElementById("btn1").style.visibility = "initial"
    }
    else if (state == 5) {
        // call the function and return the string
        // var mysymbols = randomizerdude();
        var str = randomsym()
        document.getElementById("header").innerHTML = str;
        document.getElementById("smTxt").innerHTML = "Find your new number.<br>Note the symbol beside the number"
        document.getElementById("btn2").style.visibility = "initial"
        document.getElementById("btn1").style.visibility = "initial"
    }
    else if (state == 6) {

        document.getElementById("header").innerHTML = selectedSym
        document.getElementById("smTxt").innerHTML = "your symbol is: <br>" +selectedSym
        document.getElementById("btn2").style.visibility = "initial"
        document.getElementById("btn1").style.visibility = "hidden"
    }
}
updateView()
