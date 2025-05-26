const calculation = document.querySelector(".calc");
const buttons = document.querySelectorAll(".alpha");
const ac = document.querySelector(".ac");
const total_result = document.querySelector(".result");
const equal_to = document.querySelector(".equal-to");
const signs = ['+', '-', '%', '/', '*'];
let ac_str = ac.innerText;

let str_val = "0"

// hide the total result using display: none
total_result.style.display = 'none';

ac.addEventListener('click', () => {
    let arr_val = str_val.split('')
    arr_val.pop()
    str_val = arr_val.join('')
    if (str_val === '') str_val += '0';
    calculation.innerText = str_val;
})

for (const button of buttons) {
    // console.log(button)
    button.addEventListener('click', function () {
        let bttn_val = button.innerHTML;
        console.log(bttn_val)
        if (
            str_val.length === 1 &&
            str_val[0] === '0' && 
            !signs.includes(bttn_val)) {
            str_val = bttn_val;
        } else str_val += bttn_val;

        calculation.innerText = str_val;
    })
}

equal_to.addEventListener('click', function() {
    let calc = calculation.innerText;
    total_result.style.display = 'block';
    total_result.innerText = eval(calc);
})

