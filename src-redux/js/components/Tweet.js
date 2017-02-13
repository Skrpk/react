/**
 * Created by user on 13.02.2017.
 */
import React from "react";
import {deleteTweet, updateTweet} from "../actions/tweetsActions";

export default class Tweet extends React.Component {
    deleteTweet () {
        store.dispatch(deleteTweet.call(this));
    }
    render () {
        debugger
        this.id = this.props.id;

        return (
                <li id={this.props.id}>
                    {this.props.text}
                    <button class="btn btn-danger" onClick={this.deleteTweet}>Delete</button>
                </li>
        );
    }
}