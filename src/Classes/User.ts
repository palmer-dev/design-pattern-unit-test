import {ObserverNotificationTask} from "../Observers/TaskNotifier";

export class User extends ObserverNotificationTask {
    firstname: string;
    lastname: string;

    constructor(firstname: string = "New Firstname", lastname: string = "New Lastname") {
        super();
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
