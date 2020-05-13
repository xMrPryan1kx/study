
// const btn = document.querySelector('button[type=submit]');
// const input = document.querySelector('input');
// const showHidden = document.querySelector('.show-hidden');


// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   const ul = document.querySelector('.todo-ul');

    

//   if (input.value != '') {
//     const div = document.createElement('div');
//     const cross = document.createElement('button');
//     const li = document.createElement('li');
//     div.className = 'task-header';
//     cross.className = 'delete';
//     cross.innerHTML = '&times;';
//     cross.title= 'удалить задачу';
//     li.className = 'todo-li';
//     div.innerHTML = input.value;
//     ul.appendChild(li);
//     li.appendChild(div);
//     li.appendChild(cross);
//     input.value = '';

//     cross.addEventListener('click', (e) => {
//       e.preventDefault();
//       li.parentNode.removeChild(li);
//     });
//     li.addEventListener('click', () => {
//         li.classList.toggle('done');
//         cross.classList.toggle('delete-done');
//         if (li.classList.contains('done')) {
//             cross.innerHTML = '&#10003;'
//         } else {
//             cross.innerHTML = '&times;'
//         }
        
//     })
    
    
//   } else {
//     alert('Введите задачу');
//   }
  

// });

const btn = document.querySelector('button[type=submit]');
const input = document.querySelector('input');
const ul = document.querySelector('.todo-ul');

btn.addEventListener('click', (e) => {
   e.preventDefault();


   if (input.value !== '') {
      const li = document.createElement('li');
      li.className = 'todo-li';
      li.innerHTML = `
           <div class="task-header">${input.value}</div>
           <button class="delete" title="удалить задачу">×</button>
    `;
      ul.append(li);
      input.value = '';
   } else {
      alert('Введите задачу');
   }

});

ul.addEventListener('click', (e) => {
   const target = e.target;
   if (target.tagName === 'LI') {
      const cross = target.querySelector('.delete');
      target.classList.toggle('done');
      cross.classList.toggle('delete-done');
      if (target.classList.contains('done')) {
         cross.innerHTML = '&#10003;';
      } else {
         cross.innerHTML = '&times;';
      }
   }
   if (target.classList.contains('delete')) {

      const li = target.closest('.todo-li');
      li.remove();
   }

});
