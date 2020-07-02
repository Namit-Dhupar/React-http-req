import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        console.log(this.props);
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice(0, 4); //To select first 4 post from the API call
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            } )
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => { //When a particulat Post is clicked
        this.props.history.push({pathname: '/post/' + id}); //programmatic Navigation
        //Usefull When a page needs to be redirected somewhere after a certain http request
    }
    
    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return ( //Onclicking the link, Id will load on the FullPost due to Route tag on the Blog.js
                
                <Post  key={post.id}
                    title={post.title} 
                    author={post.author}
                clicked={() => this.postSelectedHandler(post.id)} />
      
                );
            });
        }

        return (
            <div>
            <section className="Posts">
                {posts}
            </section>
            {/*Example of Nested Routing*/}
            <Route path='/post/:id' component={FullPost} /> {/*For Dynamic ID's from Link tag of Posts.js*/}
            </div>
        );
    }
}

export default Posts;