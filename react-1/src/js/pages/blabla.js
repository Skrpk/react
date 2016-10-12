import React from "react";

export default class Text extends React.Component {
    render () {
        console.log(this.props);
        return (
            <a href="http://localhost:8080/#/poshel_von">{this.props.route.swearword || "просто чмо"}</a>
        );
    }
}