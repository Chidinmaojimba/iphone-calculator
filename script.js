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
    if (getComputedStyle(total_result).display !== "none") {
        // when total_result element display style is not 
        // equal to none, it shows that total result has been 
        // calculated so the ac button should reinitialize the 
        // calculation element and the total_result element
        // which means that the total_result will no longer be 
        // visible and the calculation will be 0
        str_val = '0';
        total_result.style.display = 'none'
    } else {
        let arr_val = str_val.split('')
        arr_val.pop()
        str_val = arr_val.join('')
        if (str_val === '') str_val += '0';
    }
    calculation.innerText = str_val;
})

for (const button of buttons) {
    // console.log(button)
    button.addEventListener('click', function () {
        let bttn_val = button.innerHTML;

        let sign_ended = false;
        signs.forEach((sign) => {
            if (str_val.endsWith(sign)) {
                sign_ended = true;
            }
        })

        if (
            str_val.length === 1 &&
            str_val[0] === '0' && 
            !signs.includes(bttn_val)) {
            str_val = bttn_val;
        } else if (!(sign_ended && signs.includes(bttn_val))){
            str_val += bttn_val;
        } else {}

        calculation.innerText = str_val;
    })
}

equal_to.addEventListener('click', function() {
    let calc = calculation.innerText;
    total_result.style.display = 'block';
    total_result.innerText = eval(calc);
})

