
export class Question {
    id: number=-1;
    question: string;
    category: Category;
    choices: Choice[] = [];
    explanation: string = '';
    constructor(question:string, category: Category) {
        this.question = question;
        this.category = category;
    }
}

export class Choice {
    id: number = -1;
    text: string;
    correct: boolean;
    constructor(text: string, correct: boolean) {
        this.text = text;
        this.correct = correct;
    }
}

export class Category {
    id: number;
    description: string;
    constructor(id: number, description: string) {
        this.id = id;
        this.description = description;
    }
}
