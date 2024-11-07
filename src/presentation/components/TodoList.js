import taskManager from "../../domain/TaskManager.js";
import Task from "./Task.js";
import TaskInput from "./TaskInput.js";

function TodoList(){
    let todoContainer;


    const onTaskCreated = (task) => {
        let taskDomain = taskManager.addTask(task);
        const noTasks = document.querySelector('.no_tasks'); 
        noTasks.style.display = 'none';    
        todoContainer.appendChild(Task(taskDomain.title, taskDomain.about, taskDomain.id).init());
    };

    function _render(){     
        const taskInput = TaskInput(onTaskCreated).init();
        todoContainer.appendChild(taskInput);

        const tasks = taskManager.getTasks();
         if (tasks.length != 0) {           
             tasks.forEach(task => {
                todoContainer.appendChild(Task(task.title, task.about, task.id).init());
            });
        } else {
            const noTasks = document.querySelector('.no_tasks'); 
            noTasks.style.display = 'flex';                    
        }
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