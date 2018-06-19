import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {handleAddingNewQuestion} from "../actions/Questions";
import Login from "./Login";


class AddQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false
    };

    handleOption1Change = (e) => {
        const optionOneText = e.target.value;

        this.setState(() => ({
            optionOneText
        }));
    };

    handleOption2Change = (e) => {
        const optionTwoText = e.target.value;

        this.setState(() => ({
            optionTwoText
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const {optionOneText, optionTwoText} = this.state;
        const {dispatch} = this.props;

        dispatch(handleAddingNewQuestion(optionOneText, optionTwoText));

        this.setState(() => ({
            optionOneText: '',
            optionTwoText: '',
            toHome: true
        }));

    };

    render() {

        const {toHome, optionOneText, optionTwoText} = this.state;
        const {loggedInUser} = this.props;

        if (!loggedInUser) {
            return (
                <Login/>
            )
        }

        if (toHome === true) {
            return <Redirect to="/"/>
        }


        return (
            <div className="center">
                <h3>Would You Rather?</h3>
                <form onSubmit={this.handleSubmit}>
                    <br/>
                    <label>Option 1: <input type="text"
                                            name="option1"
                                            onChange={this.handleOption1Change}
                                            value={optionOneText}/> </label>
                    <br/>
                    <label>Option 2: <input type="text"
                                            name="option2"
                                            onChange={this.handleOption2Change}
                                            value={optionTwoText}/> </label>
                    <br/>
                    <button className="btn"
                            type="submit"
                            disabled={optionOneText === '' || optionTwoText === ''}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({loggedInUser}) {

    return {
        loggedInUser
    }
}


export default connect(mapStateToProps)(AddQuestion)