import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

/*
The form is available at/add.
The application shows the text “Would You Rather” and has a form for creating two options.
Upon submitting the form, a new poll is created and the user is taken to the home page.
The new polling question appears in the correct category on the home page.
 */

class AddQuestion extends Component {
    state = {
        questionText: '',
        optionOneText: '',
        optionTwoText: '',
        toHome: false
    };

    handleQuestionChange = (e) => {
        const questionText = e.target.value;

        this.setState(() => ({
            questionText
        }));
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

        //todo get question data from state


        //todo dispatch the add question action

        this.setState(() => ({
            questionText: '',
            optionOneText: '',
            optionTwoText: '',
            toHome: true
        }));

    };

    render() {

        const {toHome, questionText, optionOneText, optionTwoText} = this.state;

        if (toHome === true) {
            return <Redirect to="/"/>
        }


        return (
            <div className="center">
                <h3>Would You Rather?</h3>
                <form onSubmit={this.handleSubmit}>
                    <labe>Question: <input type="text"
                                           name="question"
                                           onChange={this.handleQuestionChange}
                                           value={questionText}/></labe>
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
                            disabled={questionText === '' || optionOneText === '' || optionTwoText === ''}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}


export default connect()(AddQuestion)