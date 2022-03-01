let display = document.getElementById('display')

window.onload = function() {
    display.value = ''
}

function writeIn(button) {
    display.value += button.innerText
}

function cancel() {
    display.value = ''
}

function calculate() {
    let calc = display.value.replace('x', '*').replace('^', '**')
    display.value = eval(calc)

}

display.onkeyup = function(e) {
    if(e.keyCode == 13) {
        calculate()
    }
}