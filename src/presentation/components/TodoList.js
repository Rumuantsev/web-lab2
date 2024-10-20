import taskManager from "../../domain/TaskManager.js";
import Task from "./Task.js";
import TaskInput from "./TaskInput.js";

function TodoList(){
    let todoContainer;

    const onTaskCreated = (task) => {
        let taskDomain = taskManager.addTask(task);
        todoContainer.appendChild(Task(taskDomain.title, taskDomain.about, taskDomain.id).init());
    };

    function _render(){     
        const taskInput = TaskInput(onTaskCreated).init();
        todoContainer.appendChild(taskInput);

        taskManager.getTasks().forEach(task => {
            todoContainer.appendChild(Task(task.title, task.about, task.id).init());
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