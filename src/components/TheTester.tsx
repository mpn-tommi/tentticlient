import React, { Component } from 'react'
import {push} from "connected-react-router";
import { Dispatch } from 'redux';
import SingleQuestion from './tester/SingleQuestion';
// import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Question } from '../redux/model/question';

export interface TesterProps {
    navigateTo: Function;
    kysymykset: Question[]
}
export interface TesterState {
}


class TheTester extends Component<TesterProps> {
    state = { nykyinen: 0, loppu: false, oikeita: 0, kaynnissa: false}

    nextQuestion = (oikein:boolean) => {
        var oikeita = this.state.oikeita + (oikein?1:0);
        if (this.state.nykyinen + 1 < this.props.kysymykset.length)
            this.setState({nykyinen: this.state.nykyinen + 1, oikeita: oikeita});
        else {
            this.setState({loppu: true, oikeita: oikeita});
        }
    }
    backHome = () => {
        this.props.navigateTo("/");
    }

    render() {
        let sisalto = <p>Loading questions..</p>;
        if (this.state.loppu) {
            sisalto = <p>Kaikki käyty, tuloksia vailla..</p>
        } else if (this.state.nykyinen >= 0 && this.state.nykyinen < this.props.kysymykset.length) {
            var nykyinen = this.props.kysymykset[this.state.nykyinen];
            sisalto =
                <div className="content">
                    <h1>Question {(this.state.nykyinen+1) + "/" + this.props.kysymykset.length}</h1>
                    <SingleQuestion question={nykyinen} nextQuestion={this.nextQuestion}/>
                    {/*!this.state.loppu &&
                    <Button className="pull-right" onClick={this.backHome}>Quit and go home</Button>
                    */}
                </div>
        }
        return (
            <div>
                {sisalto}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
      navigateTo: (address: string) => dispatch(push(address))
    };
  }

export default connect(null,mapDispatchToProps)(TheTester);