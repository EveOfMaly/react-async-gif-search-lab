import React from "react";
import GifList from "../components/GifList"
import GifSearch  from "../components/GifSearch"


export default class GifListContainer extends React.Component{
 
    state = {
        gifList: []
    };
      

    // componentDidMount(){
    //     this.fetchSearch("dog")
    // }
    
    //responsible for fetching the data
    fetchSearch = (query) => {
        let endpoint =  `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=LzoNvkRTQkaMl2I6Ll69OdMDfsNCfUU9&rating=g`
        
        console.log("endpoint", endpoint)
        fetch(endpoint)
        .then(response => response.json())
        .then(({data}) => { 
          console.log("data", {data})
    
        //reduce output to just three
        let dataFilter = data.slice(0,3)
    
        console.log("dataFilter", dataFilter)

        let dataURLs = dataFilter.map((gif) => gif.images.original.url)
          
        console.log("dataURLs", dataURLs)
        
        this.setState({
            gifList: dataURLs
          });
        });
    }
    

    onSubmit = (event, query) => {
        event.preventDefault()

        
        // let searchData = {
        //     input: query
        // }

        // this.setState({searchData})

        this.fetchSearch(query);
    }

   

    render(){
        return (
        <div>
            <GifList data={this.state.gifList}/>
            <GifSearch onSubmit={this.onSubmit} />
        </div>
        )
    }





}