import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Bootstrap from "./vendor/bootstrap-without-jquery";

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import blabla from "./pages/blabla";
import von from "./pages/von";

const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Featured}></IndexRoute>
            <Route path="archives" name="archives" component={Archives}>
                <Route path="pidor" name="archives" component={blabla} swearword="пидор"></Route>
                <Route path="loh" name="archives" component={blabla} swearword="лох"></Route>
            </Route>
            <Route path="settings" name="settings" component={Settings}></Route>
        </Route>
        <Route path="poshel_von" name="poshel_von" component={von}></Route>
    </Router>,
app);