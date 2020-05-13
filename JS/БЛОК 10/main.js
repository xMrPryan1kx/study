const btnEdit = document.querySelector('.edit');
const btnSave = document.querySelector('.save');
const btnCancel = document.querySelector('.cancel');
// const input = document.querySelector('input');
// const startHtml = input.value;
const div = document.querySelector('.edit-text')
const startHtmlDiv = div.innerHTML;


const select = document.querySelector('select');
const option = document.createElement('option')

let times = []
const times1 =() => {
    for(let i=0; i < JSON.parse(localStorage.getItem('obj')).length; i++) {
        option.innerHTML= i;
        select.append(option)
    };
};

const display = (inp, display) => inp.style.display = display;
const arr = {}

// !для дива
const isValueDiv =() => {
    if (localStorage.getItem('text')) {
        div.innerHTML = localStorage.getItem('text')
    } else {
        div.innerHTML = startHtmlDiv;
    }
}
isValueDiv()

btnEdit.addEventListener('click', () => {
    div.contentEditable = 'true';
    div.focus();
    // input.selectionStart = input.value.length;
    display(btnSave, 'block')
    display(btnCancel, 'block')
    display(btnEdit, 'none')
    
})
btnSave.addEventListener('click', () => {
    const date = new Date();

    let date1 = date;
    // localStorage.setItem('date', nowDate);
    // localStorage.setItem('text', div.innerHTML);
    display(btnSave, 'none');
    display(btnCancel, 'none');
    display(btnEdit, 'block')
    div.contentEditable = 'false';
    arr.time = date1;
    arr.text = div.innerHTML;
    times.push(arr);
    timesJson = JSON.stringify(times);
    localStorage.setItem('obj',timesJson);
})
btnCancel.addEventListener('click', () => {
    isValueDiv()
    display(btnSave, 'none');
    display(btnCancel, 'none');
    display(btnEdit, 'block')
    div.contentEditable = 'false';
})


const delay = localStorage.getItem('obj');
const delay1 = JSON.parse(delay)

// for (const time in delay1) {
//     if
// }

// btnOk.addEventListener('click', (e) => {
//     e.preventDefault();
//     times[date1] = date1;
//     timesJson = JSON.stringify(times);
//     localStorage.setItem('obj',timesJson);
// })







