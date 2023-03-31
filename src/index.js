import './index.css';
import List from './list.js';

const newtask = document.querySelector('#newtask');
window.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (newtask.value !== '') {
      List.add();
      newtask.value = '';
    }
  }
});

window.addEventListener('load', () => {
  List.load();
});
