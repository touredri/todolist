import List from './src/list.js';

describe('test remove and add list function', () => {
  document.body.innerHTML = `
    <input type="text" id="newtask">
    <ul class="list-container"></ul>
  `;

  test('add list', () => {
    List.add();
    expect(List.listArray).toEqual([
      {
        description: 'new task',
        complete: false,
        index: 1,
      },
    ]);
  });

  test('remove list', () => {
    List.remove(1);
    expect(List.listArray).toEqual([]);
  });
});
