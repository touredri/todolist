import './index.css';
import List from './list.js';
import { complete, removeTask } from './status.js';

const newtask = document.querySelector('#newtask');
window.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (newtask.value !== '') {
      List.add();
      newtask.value = '';
    }
  }
});

complete();

window.addEventListener('load', () => {
  List.load();
});
removeTask();
