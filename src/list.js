export default class List {
  constructor(description) {
    this.description = description;
    this.complete = false;
    this.index = null;
  }

  static listArray = [];

  static list = document.querySelector('.list-container');

  static addList() {
    let output = '';
    List.listArray.forEach((elm, i) => {
      elm.index = i + 1;
      output += `<li id="${elm.index}" class="list-item">
            <div class="row"><input type="checkbox"  
            class="checkbox" ${elm.complete ? 'checked' : ''}>
            <input type="text" class="description" value="${elm.description}"></div>
            <i class="fa-regular fa-trash-can fa-beat fa-lg remove" data-index="${elm.index}"></i></li>
        `;
    });
    List.list.innerHTML = output;

    // add event listeners to trash can icons
    const trashIcons = List.list.querySelectorAll('.remove');
    trashIcons.forEach((icon) => {
      icon.addEventListener('click', () => {
        const index = parseInt(icon.getAttribute('data-index'), 10);
        List.remove(index);
      });
      const inputFields = List.list.querySelectorAll('.description');
      inputFields.forEach((input) => {
        input.addEventListener('blur', (event) => {
          const index = parseInt(event.target.parentNode.parentNode.id, 10);
          const updatedDescription = event.target.value;
          List.edit(index, updatedDescription);
        });
      });
    });
  }

  static add() {
    const newList = new List(document.querySelector('#newtask').value);
    newList.index = List.listArray.length + 1;
    List.listArray.push(newList);
    localStorage.setItem('list', JSON.stringify(List.listArray));
    List.addList();
  }

  static remove(index) {
    const filterList = List.listArray.filter(
      (element) => element.index !== index,
    );
    List.listArray = filterList;
    localStorage.setItem('list', JSON.stringify(List.listArray));
    List.addList();
    List.updateIndexes();
  }

  static edit(id, updatedDescription) {
    const task = List.listArray.find((task) => task.index === id);
    if (task) {
      task.description = updatedDescription;
      localStorage.setItem('list', JSON.stringify(List.listArray));
      List.addList();
    }
  }

  static load() {
    const list = JSON.parse(localStorage.getItem('list'));
    if (list) {
      List.listArray = list.sort((a, b) => a.index - b.index);
      List.addList();
    }
  }

  static updateIndexes() {
    for (let i = 0; i < List.listArray.length; i += 1) {
      List.listArray[i].index = i + 1;
    }
    localStorage.setItem('list', JSON.stringify(List.listArray));
  }
}