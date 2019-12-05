import { Action } from "redux";
import { GET_QUESTIONS } from "./action_types";

export interface IQuestionAction<T=any> extends Action<string> {
    payload: T;
}

export function fetchQuestions() : IQuestionAction<string|null> {
    return { type: GET_QUESTIONS, payload: null }
};
