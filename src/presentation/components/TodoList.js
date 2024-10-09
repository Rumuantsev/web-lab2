import taskManager from "../../domain/TaskManager.js";
import Task from "./Task.js";

function TodoList(){
    let todoContainer;

    /*titleInput = element.querySelector('#titleInput');
    aboutInput = element.querySelector('#aboutInput');
    addButton = element.querySelector('#addButton');
    addButton.addEventListener('click', addTask());

    function addTask(){
        const title = titleInput.value.trim();
        const about = aboutInput.value.trim();

        if (title && about) {
            const newTask = { title, about };
            
            // Вызываем функцию обратного вызова с новой задачей
            if (typeof onTaskCreated === 'function') {
                onTaskCreated(newTask);
            }

            // Очистка полей ввода после добавления задачи
            titleInput.value = '';
            aboutInput.value = '';
            
        } else {
            alert('Поля не должны быть пустыми.');
        }
    }*/

    function onTaskCreated(task){
        let taskDomain = taskManager.addTask(task);
        todoContainer.appendChild(Task(taskDomain.title, taskDomain.about, taskDomain.id, () => {
            taskManager.deleteTask(taskDomain.id);
            todoContainer.removeChild(document.getElementById(taskDomain.id));
        }).init());
    }

    function _render(){       
        const p = document.createElement('p'); //  Создаем  элемент  <p>
        p.textContent = "hello world"; //  Добавляем  текст  в  элемент
        todoContainer.appendChild(p);
        /*taskManager.getTasks().forEach(task => {
            todoContainer.appendChild(Task(task.title, task.about, task.id, () => {
                taskManager.deleteTask(task.id);
                todoContainer.removeChild(document.getElementById(task.id));
            }).init());
        });*/
    }

    function _init(_root){
        todoContainer = _root;
        _render();
    }

    return {
        render: _init
    }
}

export default TodoList();