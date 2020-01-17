import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    
    state = {
        posts: []
    }
    //This lifecycle is best for http requests as HTTP
    //Requests are Side Effects
    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
         this.setState({posts:response.data});
      });
    }
    render () {
        const jsonposts = this.state.posts.map(mypost => {
          return <Post title={mypost.title} key={mypost.id}/>;
        });
        return (
            <div>
                <section className="Posts">
                   {jsonposts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;