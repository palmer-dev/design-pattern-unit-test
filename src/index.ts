import {User} from "./Classes/User";
import {TaskFactory} from "./Factories/TaskFactory";

const fact = new TaskFactory();

const flo = new User("Florian", "REY");
const laurence = new User("Laurence", "BIAZ");
const bernard = new User("Bernard", "ARNAULD");

const newProjectTask = fact.createTask("ProjectTask", {
    user: flo,
    project: "NEXT-U",
    titre: "titre",
    description: "description",
    importance: 2,
    isNotifiable: true
})

const newPersonalTask = fact.createTask("PersonalTask", {
    user: laurence,
    titre: "titre",
    description: "description",
    importance: 2,
    isNotifiable: true
})

const newBackgroundTask = fact.createTask("BackgroundTask", {
    user: bernard,
    titre: "titre",
    description: "description",
    importance: 2,
    isNotifiable: true
})

if (newProjectTask?.subscribe) {
    newProjectTask.subscribe(flo);
    newProjectTask.subscribe(laurence);
    newProjectTask.subscribe(bernard);
    newProjectTask.notify({title: "Deadline near !", description: "You have to give your work back soon !"})
}

console.log(newProjectTask)
console.log(newPersonalTask)
console.log(newBackgroundTask)
