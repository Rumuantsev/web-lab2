import taskManager from "../../domain/TaskManager.js";
import Task from "./Task.js";
import TaskInput from "./TaskInput.js";

function TodoList(){
    let todoContainer;

    const onTaskCreated = (task) => {
        taskManager.getTasks().forEach(task => {
            todoContainer.removeChild(document.getElementById(task.id));
        });

        taskManager.addTask(task);
        taskManager.getTasks().forEach(task => {
            todoContainer.appendChild(Task(task.title, task.about, task.id, () => {
                taskManager.deleteTask(task.id);
                todoContainer.removeChild(document.getElementById(task.id));
            }).init());
        });
    };
    
    function _render(){     
        const taskInput = TaskInput(onTaskCreated).init();
        todoContainer.appendChild(taskInput);

        taskManager.getTasks().forEach(task => {
            todoContainer.appendChild(Task(task.title, task.about, task.id, () => {
                taskManager.deleteTask(task.id);
                todoContainer.removeChild(document.getElementById(task.id));
            }).init());
        });
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