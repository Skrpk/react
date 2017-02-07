import React from "react";
import * as TodoActions from "../actions/todoAction";

export default class Todo extends React.Component {
    
    deleteTodo () {
        TodoActions.deleteTodo(this.id);
    }
    
    render () {
        var liStyle = {
          display: 'inline-block',
          width: '100%',
          marginBottom: "10px"
        };
        var linkStyle = {
            float: 'right'
        };

        this.id = this.props.id;
        this.complete = this.props.complete;
        this.text = this.props.text;
        const icon = this.complete ? "\u2714" : "\u2716"

        return (
            <div>
                <li style={liStyle}>{this.text} {icon} <a style={linkStyle} class="btn btn-danger" onClick={this.deleteTodo.bind(this)}>Delete!</a></li>

            </div>
        );
    }
}