import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../redux/actions';
import { Button } from 'react-bootstrap';

export interface ButtonProps {
    fetchQuestions: Function;
}
export interface ButtonState {
}

class ConnectedButton extends React.Component<ButtonProps, ButtonState> {
    goFetch = () => {
        this.props.fetchQuestions();
    }
    render() {
        return (<Button onClick={this.goFetch}>Start the quiz</Button>)

    }
}
const mapDispatchToProps = {
     fetchQuestions: fetchQuestions,
};

let StartButton = connect(null,mapDispatchToProps)(ConnectedButton);
export default StartButton;