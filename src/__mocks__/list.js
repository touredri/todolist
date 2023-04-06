export default class List {
  constructor(description) {
    this.description = description;
    this.complete = false;
    this.index = null;
  }

  static listArray = [];

  static list = document.querySelector('.list-container');

  static add() {
    const newList = new List(document.querySelector('#newtask').value);
    newList.index = List.listArray.length + 1;
    List.listArray.push(newList);
    localStorage.setItem('list', JSON.stringify(List.listArray));
  }

  static remove(index) {
    const filterList = List.listArray.filter(
      (element) => element.index !== index,
    );
    List.listArray = filterList;
    localStorage.setItem('list', JSON.stringify(List.listArray));
  }

  static edit(id, updatedDescription) {
    const task = List.listArray.find((task) => task.index === id);
    if (task) {
      task.description = updatedDescription;
      localStorage.setItem('list', JSON.stringify(List.listArray));
    }
  }
}