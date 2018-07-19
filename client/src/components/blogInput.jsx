import React, { Component } from 'react';
import { render } from 'react-dom';

class BlogInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content:'',
            
        }
    }



    onInputChange(value) {
        this.setState({ title: value });
    }

    onBtnClick(value) {

        fetch('/api/blogList', {
            method:'POST',
            body: JSON.stringify(value),
            headers: new Headers({ 'Content-Type': 'application/json'})
        })

        console.log(value);
        var para = document.createElement("P");                       // Create a <p> element
        var t = document.createTextNode(value);       // Create a text node
        para.appendChild(t);                                          // Append the text to <p>
        document.body.appendChild(para);

    }

    onInputChangeContent(value) {
        this.setState({ content: value });
    }

    


    render() {
            return (
                <div>
                    <form>
                    <h1>{this.state.title}</h1>
                    <input
                        value={this.state.title}
                        onChange={(event) => this.onInputChange(event.target.value)}
                        placeholder="Title" />

                        <h1>{this.state.content}</h1>
                    <input
                        value={this.state.content}
                        onChange={(event) => this.onInputChangeContent(event.target.value)}
                        placeholder="Enter Content Here" />

                    <button onClick={(event) => this.onBtnClick(this.state)}>Submit</button>
                    </form>
                </div>
            );

            return (
                <div>
                    <h1>LOADING....</h1>
                </div>
            )
        

    }
}

export default BlogInput;