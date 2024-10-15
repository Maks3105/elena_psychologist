// MAIN DETAILS OPEN/CLOSE
const btn_1 = document.getElementById('btn-cross-1');
const btn_2 = document.getElementById('btn-cross-2');
const btn_3 = document.getElementById('btn-cross-3');
const btn_4 = document.getElementById('btn-cross-4');

const btn_rotate_1 = document.getElementById('btn_1');
const btn_rotate_2 = document.getElementById('btn_2');
const btn_rotate_3 = document.getElementById('btn_3');
const btn_rotate_4 = document.getElementById('btn_4');

const hr_1 = document.getElementById('hr-1');
const hr_2 = document.getElementById('hr-2');
const hr_3 = document.getElementById('hr-3');
const hr_4 = document.getElementById('hr-4');

const hrs = [hr_1, hr_2, hr_3, hr_4];
const btns_rotate = [btn_rotate_1, btn_rotate_2, btn_rotate_3, btn_rotate_4];
const hrs_hidden_name_class = ['hr-1__hidden', 'hr-2__hidden', 'hr-3__hidden', 'hr-4__hidden'];

btn_1.onclick = () => {
    hr_1.classList.toggle('hr-1__hidden');
    hr_1.classList.toggle('hr__open');
    btn_rotate_1.classList.toggle('btn_rotate');

    for (let i = 1; i < hrs.length; i++) {
        console.log(i)
        if (hrs[i].classList.contains('hr__open')) {
            hrs[i].classList.remove('hr__open');
            hrs[i].classList.add(hrs_hidden[i]);
            btns_rotate[i].classList.toggle('btn_rotate');
        }
    }
};

btn_2.onclick = () => {
    hr_2.classList.toggle('hr-2__hidden');
    hr_2.classList.toggle('hr__open');
    btn_rotate_2.classList.toggle('btn_rotate');

    for (let i = 0; i < hrs.length; i++) {
        if (hrs[i].classList.contains('hr__open') && i != 1) {
            hrs[i].classList.remove('hr__open');
            hrs[i].classList.add(hrs_hidden[i]);
            btns_rotate[i].classList.toggle('btn_rotate');
        }
    }
};

btn_3.onclick = () => {
    hr_3.classList.toggle('hr-3__hidden');
    hr_3.classList.toggle('hr__open');
    btn_rotate_3.classList.toggle('btn_rotate');

    for (let i = 0; i < hrs.length; i++) {
        if (hrs[i].classList.contains('hr__open') && i != 2) {
            hrs[i].classList.remove('hr__open');
            hrs[i].classList.add(hrs_hidden[i]);
            btns_rotate[i].classList.toggle('btn_rotate');
        }
    }
};

btn_4.onclick = () => {
    hr_4.classList.toggle('hr-4__hidden');
    hr_4.classList.toggle('hr__open');
    btn_rotate_4.classList.toggle('btn_rotate');

    for (let i = 0; i < hrs.length; i++) {
        if (hrs[i].classList.contains('hr__open') && i != 3) {
            hrs[i].classList.remove('hr__open');
            hrs[i].classList.add(hrs_hidden[i]);
            btns_rotate[i].classList.toggle('btn_rotate');
        }
    }
};
//