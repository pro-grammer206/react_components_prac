import React from 'react'


class BlogForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            author:"",
            heading:"",
            content:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);


    }
    handleSubmit(e){
        e.preventDefault()
        console.log(this.state)
    }
    handleChange(e){
        const name =e.target.name
        const value =e.target.value
        this.setState({[name]:value})
    }

    render(){
        return(
            <form className="userform" onSubmit={this.handleSubmit}>
                <h3>Blog Form</h3>
                <label htmlFor="author">Author<input id='author' type="text" name="author" placeholder='Enter author' value={this.state.author} onChange={this.handleChange} /></label>
                <label htmlFor='heading'>Title<input id='heading' type="text" name="title" placeholder='Enter article title' value={this.state.title} onChange={this.handleChange} /></label>
                <label htmlFor='content'>Content</label><textarea id='content' name='content' placeholder='Enter content' rows='5' value={this.state.content} onChange={this.handleChange}/>
               
                <input type='submit' value='Post'/>
            </form>
        )
    }
}

export default BlogForm
