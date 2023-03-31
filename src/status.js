import List from './list.js';

export const complete = () => {
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('checkbox')) {
      const index = parseInt(e.target.parentNode.parentNode.id, 10);
      List.listArray.forEach((elm) => {
        if (elm.index === index) {
          elm.complete = !elm.complete;
          localStorage.setItem('list', JSON.stringify(List.listArray));
        }
      });
    }
  });
};

const remove = document.querySelector('.deleteCompleteTask');

export const removeTask = () => {
  remove.addEventListener('click', () => {
    const filterList = List.listArray.filter((elm) => elm.complete === false);
    List.listArray = filterList;
    localStorage.setItem('list', JSON.stringify(List.listArray));
    List.addList();
    List.updateIndexes();
  });
};
