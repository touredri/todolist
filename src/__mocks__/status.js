// import List from './list.js';

export const complete = () => {
  const tasks = JSON.parse(localStorage.getItem('list'));
  const oldStatus = tasks[0].complete;
  tasks[0].complete = !oldStatus;
  localStorage.setItem('list', JSON.stringify(tasks));
};

export const remove = () => {
  console.log('pass');
};