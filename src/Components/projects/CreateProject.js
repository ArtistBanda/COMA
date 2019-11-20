import React, { Component } from 'react'

export class CreateProject extends Component {
    state = {
        title: '',
        content: '',
        git: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="black-text text-darken-3">Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" cols="30" rows="10" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">GitHub Repositery Link</label>
                        <input type="text" id="gitrepo" onChange={this.handleChange} />
                    </div>

                    <dev className="input-field">
                        <button className="btn green lighten-3 z-depth-2">Create</button>
                    </dev>
                </form>
            </div>
        )
    }
}

export default CreateProject
