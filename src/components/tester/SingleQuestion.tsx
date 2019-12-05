import React, {Component} from 'react';
import { Question } from '../../redux/model/question';
import { Button } from 'react-bootstrap';

export interface SingleQuestionProps {
    nextQuestion: Function;
    question: Question;
}
export interface SingleQuestionState {
}


class SingleQuestion extends Component<SingleQuestionProps> {
    nextQuestionPlease = () => {
        this.props.nextQuestion();
    }
    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html: this.props.question.question}}></div>
                <Button onClick={this.nextQuestionPlease}>Next</Button>
            </div>
        );
    }
}

export default SingleQuestion;