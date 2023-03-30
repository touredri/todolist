import './index.css';

const listArray = [
  {
    description: 'Do the laundry',
    completed: false,
    index: 0,
  },
  {
    description: 'Do the dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'Do the homework',
    completed: false,
    index: 2,
  },
];
/* <i class="fa-regular fa-trash-can fa-beat fa-lg remove"></i> */
const list = document.querySelector('.list-container');
listArray.forEach((elm) => {
  const li = document.createElement('li');
  li.classList.add('list-item');
  li.innerHTML = `
        <div class="row"><input type="checkbox" class="checkbox" ${elm.completed ? 'checked' : ''}>
        <p class="description">${elm.description}</p></div>
        <div class="icon"><i class="fa-solid fa-ellipsis-vertical"></i></div>
    `;
  list.appendChild(li);
});
