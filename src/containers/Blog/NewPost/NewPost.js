import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        auth: false,
        submit: false
    }

    componentDidMount () {
        console.log(this.props);
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('/posts', data)
            .then(response => {
                console.log(response);
                this.setState({submit: true}); //On clicking this function is called which will set the submit state to submitted
            });
    }

    render () {
        //Using Redirect Outside of a switch
        let redirect = null;
        if(this.state.submit){
            redirect = <Redirect to='/'/>
        }

        return (
            <div className="NewPost">
            {redirect}
            {/*<Redirect to='/' />because of this we will be always redirected to the home(NavLink to='/') whenever we click on New Post*/}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Namit">Namit</option>
                    <option value="Krrish">Krrish</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;