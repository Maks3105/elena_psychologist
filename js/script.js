// MAIN DETAILS OPEN/CLOSE
const btn_1 = document.getElementById('btn-cross-1');
const btn_2 = document.getElementById('btn-cross-2');
const btn_3 = document.getElementById('btn-cross-3');
const btn_4 = document.getElementById('btn-cross-4');

const hr_1 = document.getElementById('hr-1');
const hr_2 = document.getElementById('hr-2');
const hr_3 = document.getElementById('hr-3');
const hr_4 = document.getElementById('hr-4');

btn_1.onclick = () => hr_1.classList.toggle('hr-1__hidden');
btn_2.onclick = () => hr_2.classList.toggle('hr-2__hidden');
btn_3.onclick = () => hr_3.classList.toggle('hr-3__hidden');
btn_4.onclick = () => hr_4.classList.toggle('hr-4__hidden');