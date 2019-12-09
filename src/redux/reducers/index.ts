import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { IQuestionAction } from '../actions';
import { GET_QUESTIONS, QUESTIONS_RECEIVED } from '../actions/action_types'
import { Question, Category, Choice } from '../model/question';

export const initialState = {
    questions: [],
    correct: 0,
    currentCategory: 1,
    loading: false,
    loaded: false
};

export interface IQuestionState {
    questions: Question[];
    correct: number;
    currentCategory: number;
    loading: boolean;
    loaded: boolean;
  }
  

function rootReducer(state: IQuestionState = initialState,
    action: IQuestionAction) {
    if (action.type === GET_QUESTIONS) {
      return {...state, questions: [], loading: true, loaded: false};
    } else if (action.type === QUESTIONS_RECEIVED) {
        return {...state, loading: false, questions: action.payload, loaded: true}
    }
    return state;
  };
  
  // ToDo: fix the any type
  export default function createRootReducer(history: any) {
    return combineReducers({
      router: connectRouter(history),
      rootReducer  // rest of your reducers
    })
  }
  