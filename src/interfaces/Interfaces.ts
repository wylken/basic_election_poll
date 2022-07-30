
export interface PollInterface {
    id: string;
    text:string;
    questions:QuestionInterface[]
}

export interface QuestionInterface {
    id: string;
    text:string;
    answers:AnswerInterface[]
}

export interface AnswerInterface {
    id: string;
    text:string;
}
