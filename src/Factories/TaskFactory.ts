import {BackgroundTask, PersonalTask, ProjectTask, Task} from "../Classes/Task";
import {TaskDecorator} from "../Decorator/TaskDecorator";

interface InterfaceTaskFactory {
    createTask(title: string, description: string, importance: number): Task;
}


class ProjectTaskFactory implements InterfaceTaskFactory {
    createTask(props: any = {}): Task {
        const {user, title, description, isNotifiable, importance, project, startDate, endDate} = props;
        if (isNotifiable)
            return new TaskDecorator(new ProjectTask(user, title, description, importance, project, startDate, endDate));
        return new ProjectTask();
    }
}

class PersonalTaskFactory implements InterfaceTaskFactory {
    createTask(props: any = {}): Task {
        const {user, title, description, importance, familyMember, isNotifiable} = props;
        if (isNotifiable)
            return new TaskDecorator(new PersonalTask(user, title, description, importance, familyMember));
        return new PersonalTask(user, title, description, importance, familyMember);
    }
}

class BackgroundTaskFactory implements InterfaceTaskFactory {
    createTask(props: any = {}): Task {
        const {user, title, description, importance, notes, isNotifiable} = props;
        if (isNotifiable)
            return new TaskDecorator(new BackgroundTask(user, title, description, importance, notes));
        return new BackgroundTask(user, title, description, importance, notes);
    }
}

export class TaskFactory {
    private factories: object = {};

    constructor() {
        this.factories = {
            ProjectTask: new ProjectTaskFactory(),
            PersonalTask: new ProjectTaskFactory(),
            BackgroundTask: new BackgroundTaskFactory(),
        }
    }

    /**
     * @param taskType - Name of the task type to create
     * @param props - Parameters needed for the different type of tasks to be created properly
     */
    createTask(taskType: string, props?: any) {
        try {
            if (this.factories[taskType]) {
                if (props)
                    return this.factories[taskType].createTask(props);
                return this.factories[taskType].createTask();
            } else {
                console.log(new Error(`${taskType} n'est pas un type de tâche enregistrée.`));
            }
            return null
        } catch (err) {
            console.error(err);
            throw new Error(`${taskType} n'est pas un type de tâche enregistrée.`);
        }
    }
}
