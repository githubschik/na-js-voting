let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');

priority.onclick = function () {
  priority.classList.toggle('is-important');
  if (priority.classList.contains('is-important')) {
    priority.textContent = 'Важная задача';
  } else {
    priority.textContent = 'Обычная задача';
  }
};

form.onsubmit = function (evt) {
    evt.preventDefault();
    // Создаём новый элемент <div> и записываем его в переменную
    let taskitem = document.createElement('li');
    taskitem.textContent = input.value;
    
    //console.log(taskitem.textContent);
    if(priority.textContent == 'Важная задача')
        taskitem.classList.add('is-important');
    
    list.append(taskitem);
    input.value = '';
};

/*
 * В личных записках Кекса нашлось описание, как должна работать программа:

Каждая задача в списке — это элемент li. При отправке формы (переменная form) новая задача добавляется в конец списка (переменная list).
Текст задачи берётся из поля ввода (переменная input).
Если у переключателя приоритета (переменная priority) есть класс is-important, то новой задаче также добавляется класс is-important.
Бонус: после того, как задача добавится в список, поле ввода можно очистить. Но можно не очищать. Подходят оба варианта.
1. Каждая задача в списке — это элемент li. При отправке формы (переменная form) новая задача добавляется в конец списка (переменная list).
2. Текст задачи берётся из поля ввода (переменная input).
3. Если у переключателя приоритета (переменная priority) есть класс is-important, то новой задаче также добавляется класс is-important.


// Создаём новый абзац
let newElement = document.createElement('p');

// Меняем текстовое содержимое
newElement.textContent = 'Я новый абзац!';

// Добавляем класс
newElement.classList.add('some-text');

// Добавляем элемент на страницу
parent.append(newElement);

*/
