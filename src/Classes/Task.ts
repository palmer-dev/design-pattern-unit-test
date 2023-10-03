import {User} from "./User";

export class Task {
    /** The object user linked to the task */
    user?: User | undefined;
    title?: string;
    description?: string;
    importance?: number;

    constructor(user?: User, title?: string, description?: string, importance?: number) {
        this.user = user;
        this.title = title ?? "Nouvelle tâche";
        this.description = description ?? "Nouvelle description";
        this.importance = importance ?? 3;
    }
}

export class ProjectTask extends Task {
    project: string;
    startDate: Date | undefined;
    endDate: Date | undefined;

    constructor(user?: User, title?: string, description?: string, importance?: number, project?: string, startDate?: Date, endDate?: Date) {
        super(user, title ?? "Nouvelle tâche de projet", description ?? "Nouvelle description de projet", importance ?? 1);
        this.project = project;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

export class PersonalTask extends Task {
    familyMember: string;

    constructor(user?: User, title?: string, description?: string, importance?: number, familyMember?: string) {
        super(user, title ?? "Nouvelle tâche personnelle", description ?? "Nouvelle description personnelle", importance ?? 2);
        this.familyMember = familyMember ?? "moi";
    }
}

export class BackgroundTask extends Task {
    notes: string;

    constructor(user?: User, title?: string, description?: string, importance?: number, notes?: string) {
        super(user, title ?? "Nouvelle tâche de fond", description ?? "Nouvelle description de fond", importance ?? 8)
        this.notes = notes ?? "";
    }
}
