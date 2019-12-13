function pwGenerator(){

// var resultEl = document.getElementById('result');
// var lengthEl = document.getElementById('length');
// var upperCheck = document.getElementById('uppercase');
// var lowerCheck = document.getElementById('lowercase');
// var numberCheck = document.getElementById('numbers');
// var specialCheck = document.getElementById('special');
// var generateEl = document.getElementById('generate');
// var copyEl = document.getElementById('copy');

var randomLower= String.fromCharCode(Math.floor(Math.random() * 26) + 97);
var randomUpper=String.fromCharCode(Math.floor(Math.random() * 26) + 65);
var randomNumber= +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
var randomSpecial= " ~`-_!@#$%^&*()[]{}<>,.?' ";

console.log(randomSpecial);

var randomFunc = {
    lower: randomLower,
    upper: randomUpper,
    number: randomNumber,
    special: randomSpecial
};

copyEl.addEventListener("click", function(){
var textarea=document.createElement("textarea");
var password=resultEl.innerText;

if (!password){
    return;
}

textarea.value = password;
document.body.appendChild(textarea);
textarea.select();
document.execCommand("copy");
textarea.remove();

alert("Password copied to clipboard");
});

generateEl.addEventListener("click", function() {
    var length = +lengthEl.value;
    var hasLower = lowerCheck.checked;
    var hasUpper = upperCheck.checked;
    var hasNumber = numberCheck.checked;
    var hasSpecial = specialCheck.checked;

   resultEl.innertext = generatePassword(
       hasLower, 
       hasUpper, 
       hasNumber, 
       hasSpecial, 
       length);
});

function generatePassword(lower, upper, number, special,length) {
    var generatedPw = "";
    var checkedBoxes = lower + upper + number + special;
    var pwTypes = [{lower}, {upper}, {number}, {special}].filter(
        item => Object.values(item)[0]
    );
    if (checkedBoxes === 0) {
        return '';
    }

    for (let i = 0; i < length ; i += checkedBoxes) {
        pwTypes.forEach(type => {
            var funcName = Object.keys(type)[0];
            generatedPw += randomFunc[funcName]();
        });

    }
    var finalPassword = generatedPw.slice(0, length);
    
    return finalPassword;
}


function randomLower() {
    var randomLower=String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    return randomLower;
}

function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSpecial() {
    var specialCh =  " ~`-_!@#$%^&*()[]{}<>,.?' ";
    return specialCh[Math.floor(Math.random() * specialCh.length)];
}

}