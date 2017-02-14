/**
 * Created by user on 13.02.2017.
 */
import React from "react";
import {deleteTweet, updateTweet} from "../actions/tweetsActions";
import store from "../store";
import { deleteButtonStyle, tweetLiStyle } from "../styles";

export default class Tweet extends React.Component {
    deleteTweet () {
        store.dispatch(deleteTweet.apply(this));
    }
    render () {
        this.id = this.props.id;
        this.deleteButtonStyle = deleteButtonStyle;
        this.tweetLiStyle = tweetLiStyle;

        return (
                <li id={this.props.id} style={this.tweetLiStyle}>
                    {this.props.text}
                    <button class="btn btn-danger" style={this.deleteButtonStyle} onClick={this.deleteTweet.bind(this)}>Delete</button>
                </li>
        );
    }
}