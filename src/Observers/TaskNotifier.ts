interface Subject {
    // Attach an observer to the subject.
    attach(observer: ObserverNotificationTask): void;

    // Detach an observer from the subject.
    detach(observer: ObserverNotificationTask): void;

    // Notify all observers about an event.
    notify(notification: notification): void;
}

export interface notification {
    title: string;
    description: string;
}

export class ObserverNotificationTask {
    // Receive update from subject.
    update(subject: notification): void {
        console.log(`Notification received by : ... reception start `);
        console.log(subject.title)
        console.log(subject.description)
        console.log("Reception end.",);

    };
}

export class TaskNotifier implements Subject {
    private observers: ObserverNotificationTask[] = [];

    public attach(observer: ObserverNotificationTask): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        this.observers.push(observer);
    }

    public detach(observer: ObserverNotificationTask): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
    }

    public notify(notification: notification): void {
        for (const observer of this.observers) {
            observer.update(notification);
        }
    }
}


// const taskNotifier = new TaskNotifier();
// export default taskNotifier;
