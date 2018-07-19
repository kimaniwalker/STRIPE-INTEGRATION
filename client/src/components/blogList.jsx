import React, { Component } from 'react';
import { render } from 'react-dom';


class BlogList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: []
            
        }

    }

    async componentDidMount() {
        try {
            let response = await fetch('/api/blogList');
            let data = await response.json();
            console.log(data);
            this.setState({ blogs: data });
        } catch (e) {
            console.log(e);
        }


    }


    render() {
        let blogdiv = this.state.blogs.map((blog) => {
            return (
                <div key={blog.id}>
                
                    <h3>{blog.title}</h3>
                    <h5>{blog.content}</h5>
                </div>
                
            );
        });
        return (

            <div>
                <h1>LOADING....</h1>
                {blogdiv}
            </div>
        )
    }

}


export default BlogList;