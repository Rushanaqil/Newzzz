import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


export class News extends Component {

  static defaultProps = {
    country: 'us',
    pageSize: 6,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }


  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  constructor(props)
  {
    super(props);
    console.log("Hello I am a constructor from News component");
    this.state = {
        articles: [],
        loading: false,
        page:1,
        totalResults: 0,
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - Newzzz`;
  }

  async componentDidMount()
  {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=456bd5fb7c90495698f069c8a07dd83c&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    this.props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json()
    this.props.setProgress(50);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false })

    this.props.setProgress(100);
  }

handlePrevClick = async ()=>{
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=456bd5fb7c90495698f069c8a07dd83c&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false
    })
    
    }

   handleNextClick = async ()=>{
    console.log("Next");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
    {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=456bd5fb7c90495698f069c8a07dd83c&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json()
      
      this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
          loading:false
      })

    }
    // else
    //     {
    //       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=456bd5fb7c90495698f069c8a07dd83c&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     this.setState({
    //         page: this.state.page + 1,
    //         articles: parsedData.articles
    //     })
    // }

  }



  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=456bd5fb7c90495698f069c8a07dd83c&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    })
  };





  render() {
    return (
      <div className="conatiner my-3" style={{margin: "6rem"}}>
        <h1 className="text-center"  >NEWZZZZ - Top {this.capitalizeFirstLetter(this.props.category)}  Headlines </h1>
        {/* {this.state.laoding && <spinner/>} */}
        {/* <h1 style={{marginLeft: "10rem", marginTop: "5rem"}}>NEWZZZZ - Top Headlines</h1> */}
        
        {/* <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
              <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
          
        </div> */}

        <InfiniteScroll 
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<spinner/>}>

              <div className="container">

              </div>

        

        <div className="row" style={{marginRight: "3rem"}}>
          {Array.isArray(this.state.articles) && this.state.articles.length > 0 ? (
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
              );
            })
          ) : (
            // <p>Loading...</p>
            <spinner/>
             // Show a message while loading or if there are no articles
          )}
        </div>

        </InfiniteScroll>





        {/* < div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}

        





      </div>
    )
  }
}

export default News
