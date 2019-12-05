import { put, takeLatest, all } from 'redux-saga/effects';
import { GET_QUESTIONS, QUESTIONS_RECEIVED } from '../actions/action_types';
function* fetchQuestions() {
  const json = yield fetch("/api/questions")
        .then(response => response.json(), );    
  yield put({ type: QUESTIONS_RECEIVED, payload: json, });
}
function* actionWatcher() {
     yield takeLatest(GET_QUESTIONS, fetchQuestions)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}