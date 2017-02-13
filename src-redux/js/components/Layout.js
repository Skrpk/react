import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions/userActions";
import { fetchTweets } from "../actions/tweetsActions";

import Tweet from "./Tweet.js";

@connect((store) => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets
    };
})

export default class Layout extends React.Component {
    componentWillMount () {
        this.props.dispatch(fetchUser());
    }

    fetchTweets() {
        this.props.dispatch(fetchTweets());
    }

    render () {
        const { user, tweets } = this.props;
        if (!tweets.length) {
            return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>;
        }
        let keyVar = 0;
        const mappedTweets = tweets.map((tweet) => {
            return <Tweet key={keyVar++} id={tweet.id} text={tweet.text}/>;
        });
        return <div>
                <h1>{user.name}</h1>
                <ul>{mappedTweets}</ul>
            </div>;
    }
}