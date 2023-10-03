import {Task} from "./Task";

class TaskManagerClass {
    tasks: Task[] = [];

    constructor() {
        this.tasks = [];
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }

    removeTask(task: Task) {
        const indexToDelete = this.tasks.indexOf(task);
        if (indexToDelete !== -1) {
            this.tasks.splice(indexToDelete, 1);
        }
    }
}

const instance = new TaskManagerClass();
Object.freeze(instance);
export default instance;
