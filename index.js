const input_a_1 = document.getElementById("input_a_1")
const input_b_1 = document.getElementById("input_b_1")

const p_button_1 = document.getElementById("p_button_1")
const s_button_1 = document.getElementById("s_button_1")

const result_p_1 = document.getElementById("result_p_1")
const result_s_1 = document.getElementById("result_s_1")

p_button_1.addEventListener("click", () => {

    let input_a_1_val = parseFloat(input_a_1.value)
    let input_b_1_val = parseFloat(input_b_1.value)

    const isTextA = /[a-zA-Zа-яА-ЯёЁ]/.test(input_a_1_val);
    const isTextB = /[a-zA-Zа-яА-ЯёЁ]/.test(input_b_1_val);

    if (isTextA || isTextB) {
        result_p_1.textContent = 'Вводи ток цыфры мабой'
    } else {
        result_p_1.textContent = ((input_a_1_val + input_b_1_val) * 2).toFixed(0) + 'см'
    }

})

s_button_1.addEventListener("click", () => {

    let input_a_1_val = parseFloat(input_a_1.value)
    let input_b_1_val = parseFloat(input_b_1.value)

    const isTextA = /[a-zA-Zа-яА-ЯёЁ]/.test(input_a_1_val);
    const isTextB = /[a-zA-Zа-яА-ЯёЁ]/.test(input_b_1_val);

    if (isTextA || isTextB) {
        result_s_1.textContent = 'Вводи ток цыфры мабой'
    } else {

        result_s_1.textContent = (input_a_1_val * input_b_1_val).toFixed(2) + 'см^2'
    }



})





// ! не совмещать епт!!! и не спрашивать почему




const input_a_2 = document.getElementById("input_a_2")
const input_b_2 = document.getElementById("input_b_2")
const input_h_1 = document.getElementById("input_h_1")

const v_button_1 = document.getElementById("v_button_1")
const p_button_2 = document.getElementById("p_button_2")
const s_button_2 = document.getElementById("s_button_2")

const result_v_1 = document.getElementById("result_v_1")
const result_p_2 = document.getElementById("result_p_2")
const result_s_2 = document.getElementById("result_s_2")

v_button_1.addEventListener("click", () => {
    let input_a_2_val = parseFloat(input_a_2.value)
    let input_b_2_val = parseFloat(input_b_2.value)
    let input_h_1_val = parseFloat(input_h_1.value)

    const isTextA = /[a-zA-Zа-яА-ЯёЁ]/.test(input_a_2_val);
    const isTextB = /[a-zA-Zа-яА-ЯёЁ]/.test(input_b_2_val);
    const isTextH = /[a-zA-Zа-яА-ЯёЁ]/.test(input_h_1_val);

    if (isTextA || isTextB || isTextH) {
        result_v_1.textContent = 'Вводи ток цыфры мабой'
    } else {

        result_v_1.textContent = (((input_a_2_val * input_b_2_val) * input_h_1_val) / 3).toFixed(2) + 'см^3'
    }



})

s_button_2.addEventListener("click", () => {
    let input_a_2_val = parseFloat(input_a_2.value)
    let input_b_2_val = parseFloat(input_b_2.value)
    let input_h_1_val = parseFloat(input_h_1.value)

    const isTextA = /[a-zA-Zа-яА-ЯёЁ]/.test(input_a_2_val);
    const isTextB = /[a-zA-Zа-яА-ЯёЁ]/.test(input_b_2_val);
    const isTextH = /[a-zA-Zа-яА-ЯёЁ]/.test(input_h_1_val);

    if (isTextA || isTextB || isTextH) {
        result_s_2.textContent = 'Вводи ток цыфры мабой'
    } else {

        result_s_2.textContent = (((((input_a_2_val + input_b_2_val) * 2) * input_h_1_val) * 4) + (input_a_2_val * input_b_2_val)).toFixed(2) + 'см^2'
    }
})

