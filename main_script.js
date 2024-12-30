let first = document.querySelector(".input-first")
let second = document.querySelector(".input-second")
$(".mask-phone").mask("99.99.9999")

let btn = document.getElementById("send")

let result = ""

btn.addEventListener("click", () => {
    result += first.value + ","
    result += second.value
    readySecondPage(result)
    result = ""
})

function readySecondPage(valueInputs) {

    let text = document.querySelector(".check");

    if (valueInputs == "30.03.2007,17.08.2005") {
        text.innerHTML = "ВЫ САМАЯ ЛУЧШАЯ ПАРА!" 
    } else if (valueInputs == "30.03.2007,16.08.2005") {
        text.innerHTML = "ВЫ САМАЯ ЛУЧШАЯ ПАРА!" 
    } else {
        text.innerHTML = "хз хуйня" 
    }
}