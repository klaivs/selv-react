import React from 'react';
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { articleActions } from "../../redux/actions/articleActions";

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(articleActions.addArticle(article))
    };
};

class ConnectedForm extends React.Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(oEvent) {
        this.setState({ [oEvent.target.id]: oEvent.target.value });
    }
    handleSubmit(oEvent) {
        oEvent.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticle({ title, id });
        this.setState({ title: "" });
    }
    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    SAVE
          </button>
            </form>
        );
    }
}

const TestForm = connect(null, mapDispatchToProps)(ConnectedForm);
export default TestForm;
