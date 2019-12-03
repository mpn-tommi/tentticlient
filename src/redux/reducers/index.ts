import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { IQuestionAction } from '../actions';
import { GET_QUESTIONS } from '../actions/action_types'
import { Question, Category, Choice } from '../model/question';

export const initialState = {
    questions: [],
    correct: 0,
    currentCategory: 0
};

export interface IQuestionState {
    questions: Question[];
    correct: number;
    currentCategory: number;
  }
  

function rootReducer(state: IQuestionState = initialState,
    action: IQuestionAction) {
    if (action.type === GET_QUESTIONS) {
        const cat = new Category(1, "Dummy cat");
        let choices = [new Choice("Duubiduu", false), new Choice("Badadim badabum", true), new Choice("Barum badum", false)];
        const q1 = new Question("Foo bar", cat);
        q1.id = 1;
        q1.choices = choices;
        const q2 = new Question("Boo foo", cat);
        q2.id = 2;
        q2.choices = choices;
      return Object.assign({}, state, {
        questions: [q1, q2]
      });
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
  