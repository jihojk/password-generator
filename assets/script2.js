
function passwordGenerate(){
// var lowerChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// var upperChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// var numberChar = +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperChar=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var numberChar=["1","2","3","4","5","6","7","8","9","0",]
var specialChar = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "\<", "=", "\>", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var passwordOpt = [ ];
var generatedPW = "";
var passwordLength = document.getElementById('length').value;
var selected = false;

if (document.getElementById('uppercase').checked ||
    document.getElementById('lowercase').checked ||
    document.getElementById('numbers').checked ||
    document.getElementById('special').checked) {
    selected = true;
} else {
    alert("Please choose at least one option!")
    selected = false;
}

while (selected) {
    var check1 = document.getElementById('uppercase').checked;
    var check2 = document.getElementById('lowercase').checked;
    var check3 = document.getElementById('numbers').checked;
    var check4 = document.getElementById('special').checked;
    if (check1 === true) {
        passwordOpt.push("s");
    }
    if (check1 === true) {
        passwordOpt.push("n");
        if (check2 === true) {
            passwordOpt.push("s");
        } if (check3 === true) {
            passwordOpt.push("l");
        } if (check4 === true) {
            passwordOpt.push("u");
        }
        var options = "";
        var chosenCh = "";

        for (var i = 0; i < passwordLength; i++) {
            if (passwordOpt.length > 1) {
                options = ChooseCharacter(passwordOpt, passwordOpt.length);
            } else {
                options = passwordOpt[0];
            }
            if (options === "s") {
                chosenCh = ChooseCharacter(specialChar, specialChar.lenght);
            } else if (options === "n") {
                chosenCh = ChooseCharacter(numberChar, numberChar.length);
            } else if (options === "u") {
                chosenCh = ChooseCharacter(upperChar, numberChar.length);
            } else if (options === "l") {
                chosenCh = ChooseCharacter(lowerChar, numberChar.length);
            }
            generatedPW=generatedPW+chosenCh;
        }
        document.getElementById("result").value = generatedPW;
        selected=false;
        console.log(generatedPW);
    }
}
function options(array, length){
    var characters =array[Math.floor(Math.random()*length)];
    return characters;
}

function copyClipboard() {
    var copyText =document.getElementById("result");
    copyText.select();
    document.execCommand("Copy");
    alert("Password has been copied to clipboard");
}


// function randomLower() {
//     var randomLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//     return randomLower;
// }

// function randomUpper() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function randomNumber() {
//     return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// console.log(specialChar);

}