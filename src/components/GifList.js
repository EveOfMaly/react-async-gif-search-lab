import React from "react"

export default class GifList extends React.Component{
    constructor(props){
        super(props)
    }


    renderData = () => {
        return (this.props.data.map((url, idx) => <li key={idx}><img src={url} /></li>))
    }

    render(){
        return (
        <ul>
            {this.renderData()}
        </ul>
        
        )
    }

}