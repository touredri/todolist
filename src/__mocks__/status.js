export const complete = () => {
  const tasks = JSON.parse(localStorage.getItem('list'));
  const oldStatus = tasks[0].complete;
  tasks[0].complete = !oldStatus;
  localStorage.setItem('list', JSON.stringify(tasks));
};

export const removeTask = () => {
  let listArray = [
    { id: 1, description: 'task1', complete: false },
    { id: 2, description: 'task2', complete: true },
    { id: 3, description: 'task3', complete: true },
  ];
  const filterList = listArray.filter((elm) => elm.complete === false);
  listArray = filterList;
  localStorage.setItem('list', JSON.stringify(listArray));
};
