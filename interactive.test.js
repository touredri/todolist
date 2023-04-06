import List from './src/list.js';
import { complete, removeTask } from './src/status.js';

jest.mock('./src/list.js');

describe('Task manipulation', () => {
  test('Edit task', () => {
    const task = new List('task');
    task.index = 1;
    List.listArray.push(task);
    List.edit(1, 'new task');
    expect(List.listArray[0].description).toBe('new task');
  });

//   test('Update completed task checkbox', () => {
//     const task = new List('task');
//     task.index = 1;
//     List.listArray.push(task);
//     complete();
//     const checkbox = document.querySelector('.checkbox');
//     checkbox.click();
//     expect(List.listArray[0].complete).toBe(true);
//   });
});
