import {Task} from "../Classes/Task";
import {User} from "../Classes/User";
import {notification, TaskNotifier} from "../Observers/TaskNotifier";

/**
 * Add the notification handler system for the Task passed as parameter. Any kind of Task can be used and transformed to handle notification
 */
export class TaskDecorator extends Task {
    protected task: Task;
    protected notifier: TaskNotifier;

    constructor(task: Task) {
        super(task.user, task.title, task.description, task.importance);
        this.task = task;
        this.notifier = new TaskNotifier();
    }


    subscribe(user: User) {
        this.notifier.attach(user);
    }

    unsubscribe(user: User) {
        this.notifier.detach(user);
    }

    notify(notification: notification) {
        this.notifier.notify(notification);
    }
}
