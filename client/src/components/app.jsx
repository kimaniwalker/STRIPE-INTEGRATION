import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
import GoodbyeWorld from './goodbye';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';
import BlogList from './blogList';
import BlogInput from './blogInput';
import BlogAdmin from './admin';
import SingleBlogPost from './singleBlog';


class Navigation extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/goodbye">Goodbye</Link>
                    <Link to="/blogList">Our Blogs</Link>
                    <Link to="/newPost">New Post</Link>
                    <Link to="/admin">Admin</Link>
                    <AuthButton />
                    <Switch>
                        <Route exact path="/" component={HelloWorld} />
                        <Route exact path="/blogList" component={BlogList} />
                        <Route path="/bloglist/:id" component={SingleBlogPost} />
                        <Route path="/newPost" component={BlogInput} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <PrivateRoute path="/goodbye" component={GoodbyeWorld} />
                        <PrivateRoute path="/admin" component={BlogAdmin} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;