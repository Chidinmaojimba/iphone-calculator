const calculation = document.querySelector(".calc");
const buttons = document.querySelectorAll(".alpha");
const ac = document.querySelector(".ac");
let ac_str = ac.innerText;

let str_val = ""

ac.addEventListener('click', ()=>{
    let arr_val = str_val.split('')
    arr_val.pop()
    str_val = arr_val.join('')
    calculation.innerText = str_val;
})

for (const button of buttons) {
    // console.log(button)
    button.addEventListener('click', function () {
        let bttn_val = button.innerHTML;
        console.log(bttn_val)
        str_val += bttn_val;

        calculation.innerText = str_val;
    })
}

