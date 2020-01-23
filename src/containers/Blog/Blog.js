import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink } from 'react-router-dom'; //Enable Routing and NavLink is used as anchor tab for react apps
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/' exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>

                        </ul>
                    </nav>
                </header>
                {/*Here this tag is useful for routing and self explainatory
                <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/newpost" render={() => <h1>Home 2</h1>} /> */}
                
                <Route path='/' exact component={Posts} />
                <Route path='/new-post' exact component={NewPost} />
                <Route path='/:id' exact component={FullPost} /> {/*For Dynamic ID's*/}
            </div>
        );
    }
}

export default Blog;