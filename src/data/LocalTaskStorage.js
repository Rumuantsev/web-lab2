class LocalTaskStorage{

    constructor(){
        this.storageKey = "tasks";
    }

    getTasks() {
        const tasksJson = localStorage.getItem(this.storageKey);
        return tasksJson ? JSON.parse(tasksJson) : [];
    }

    addTask(task){
        const tasks = this.getTasks();
        task.id = Date.now(); // Простой способ генерации уникального ID
        tasks.push(task);
        localStorage.setItem(this.storageKey, JSON.stringify(tasks));
        return task;
    }
}

const storage = new LocalTaskStorage();

export default storage;