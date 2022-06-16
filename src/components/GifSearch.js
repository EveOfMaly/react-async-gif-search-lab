import React from "react"

export default class GifSearch extends React.Component{

    state = {
        input: ""
    }


    onChange = (event) => {
        this.setState({
        [event.target.name]: event.target.value
        })
    }

    render(){
        return (
        <form onSubmit={event => this.props.onSubmit(event, this.state.input)}>
            <input onChange={event => this.onChange(event)} value={this.state.input} name="input"></input>
            <button>Search</button>
        </form>)
    }

}