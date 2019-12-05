import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { IQuestionState } from '../redux/reducers';
import { Question } from '../redux/model/question';
import StartButton from './StartButton';

const mapStateToProps = (state: any) => {
    return { questions: state.rootReducer.questions, loading: state.rootReducer.loading };
};

export interface ListProps { questions: Question[]; loading: boolean; }
export interface ListState { }

class List extends Component<ListProps, ListState> {
    public render() {
        let questions;
        if (this.props.loading) {
            questions = <p>Loading</p>
        } else {
            questions = this.props.questions.map(q => {
                return <div key={q.id}>
                    <p>{q.question}</p>
                </div>
            });
        }
        return (
            <div>
                <h1>List</h1>
                {questions}
                <StartButton>Hae palvelimelta</StartButton>
            </div>
        )
    }
}

export default connect(mapStateToProps)(List);