import React, { Component } from 'react'
import {push} from "connected-react-router";
import { Dispatch } from 'redux';
import SingleQuestion from './tester/SingleQuestion';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

export interface TesterProps {
    navigateTo: Function;
}
export interface TesterState {
}


class TheTester extends Component<TesterProps> {
    state = {kysymykset: [], nykyinen: -1, loppu: false, oikeita: 0, kaynnissa: false}

    componentDidMount() {
        // Redux takes care of fetching..?
        // randomquestions(20).then((function (data) {
        //     this.setState({kysymykset: data, nykyinen: 0});
        // }).bind(this));
    }

    nextQuestion = (oikein:boolean) => {
        var oikeita = this.state.oikeita + (oikein?1:0);
        if (this.state.nykyinen + 1 < this.state.kysymykset.length)
            this.setState({nykyinen: this.state.nykyinen + 1, oikeita: oikeita});
        else {
            this.setState({loppu: true, oikeita: oikeita});
        }
    }
    backHome = () => {
        this.props.navigateTo("/");
    }

    render() {
        var sisalto = <p>Loading questions..</p>;
        if (this.state.loppu) {
            // sisalto = (<div>
            //     <Navigation/>
            //     <div className="content">
            //         <h1>Result</h1>
            //         <p>Done with practise quiz, your result: {this.state.oikeita} / {this.state.kysymykset.length}</p>
            //         <p>Refresh the page for a new quiz, or return <Link to="/">Home</Link></p>
            //     </div>
            //     <Copy/>
            // </div>);
        } else if (this.state.nykyinen >= 0 && this.state.nykyinen < this.state.kysymykset.length) {
            var nykyinen = this.state.kysymykset[this.state.nykyinen];
            sisalto =
                <div className="content">
                    <h1>Question {(this.state.nykyinen+1) + "/" + this.state.kysymykset.length}</h1>
                    <SingleQuestion question={nykyinen} nextQuestion={this.nextQuestion}/>
                    {!this.state.loppu &&
                    <Button className="pull-right" onClick={this.backHome}>Quit and go home</Button>
                    }
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