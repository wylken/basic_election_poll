
export interface PollInterface {
    id: string;
    text:string;
    answers:AnswerInterface[]
}

export interface AnswerInterface {
    id: string;
    text:string;
}