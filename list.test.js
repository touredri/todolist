import List from './src/list.js';

describe('test remove and add list function', () => {
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
