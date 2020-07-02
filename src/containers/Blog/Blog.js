import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'; //Enable Routing and NavLink is used as anchor tab for react apps
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';


class Blog extends Component {
    state = {
        auth: false
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/post' exact>Home</NavLink></li>{/*Home Page*/}
                            <li><NavLink to={{
                                pathname: '/new-post',
                            }}>New Post</NavLink></li>

                        </ul>
                    </nav>
                </header>
                {/*Here this tag is useful for routing and self explainatory
                <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/newpost" render={() => <h1>Home 2</h1>} /> */}
              <Switch>{/*Useful for nested routes and will render the first Route Tag*/}
              {this.state.auth ? <Route path='/new-post' exact component={NewPost} /> : null} {/*To Prevent Un authorized access*/}
                <Route path='/post' component={Posts} />{/*The home page will be loaded with contents of Posts component*/}
                <Redirect from='/' to='/post' /> {/*Routes from one url to another and will redirect in case it fails authorisation, then it prevents rendering*/}
              </Switch> 
            </div>
        );
    }
}

export default Blog;