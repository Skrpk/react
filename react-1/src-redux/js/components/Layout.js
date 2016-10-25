import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions/userActions";
import { fetchTweets } from "../actions/tweetsActions";

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
        debugger
        if (!tweets.length) {
            return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>;
        }

        return <h1>{user.name}</h1>;
    }
}