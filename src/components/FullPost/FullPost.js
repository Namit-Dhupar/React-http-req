import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
   state = {
    loadedPost: null
   }

    componentDidUpdate(){ //Causes an infinite loop hence unecessary network usage
        if(this.props.postid){
         if(!this.state.loadedPost || (this.state.loadedPost.id !== this.props.postid)){
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.postid)
            .then(response =>{
                this.setState({loadedPost: response.data});
            });             
         }   
       }
    }

     render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.postid){
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }
        if(this.state.loadedPost){//If ID is valid
     post = (
     <div className="FullPost">
         <h1>{this.state.loadedPost.title}</h1>
         <p>{this.state.loadedPost.body}</p>
         <div className="Edit">
        <button className="Delete">Delete</button>
        </div>
     </div>
          );   
        }
    return post;
    }
}

export default FullPost;