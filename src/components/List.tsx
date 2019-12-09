import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { IQuestionState } from '../redux/reducers';
import { Question } from '../redux/model/question';
import StartButton from './StartButton';
import TheTester from './TheTester';

const mapStateToProps = (state: any) => {
    return { questions: state.rootReducer.questions, loading: state.rootReducer.loading, loaded: state.rootReducer.loaded };
};

export interface ListProps { questions: Question[]; loading: boolean; loaded: boolean}
export interface ListState {  }

class List extends Component<ListProps, ListState> {
    public render() {
        // let questions;
        // if (this.props.loading) {
        //     questions = <p>Loading</p>
        // } else {
        //     questions = this.props.questions.map(q => {
        //         return <div key={q.id}>
        //             <p>{q.question}</p>
        //         </div>
        //     });
        // }
        return (
            <div>
                <h1>The quiz</h1>
                {this.props.loaded ? 
                <TheTester kysymykset={this.props.questions}></TheTester>
                :
                (this.props.loading ? 
                    <p>Loading</p>
                    :
                    <StartButton />
                    )
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(List);