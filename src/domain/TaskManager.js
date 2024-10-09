import storage from "../data/LocalTaskStorage.js";

class TaskManager {
    constructor(){
        this.repository = storage;
    }

    addTask(task){
        this.repository.addTask(task);
    }

    getTasks(){
        return this.repository.getTasks();
    }
}

const taskManager = new TaskManager();
export default taskManager;