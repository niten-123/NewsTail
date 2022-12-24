import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResults: 0,
    };
    document.title = `Newsline - ${this.capitalizeFirstLetter(
      this.props.catogary
    )} News`;
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async updatenews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catogary}&apiKey=1edc34a324844c1e9e8aedea137e3549&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updatenews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catogary}&apiKey=1edc34a324844c1e9e8aedea137e3549&page=${this.state.page}&pagesize=${this.props.pagesize}`;
   
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      
    });
  };

  render() {
    console.log("render");

    return (
      <>
        <div className={`bg-opacity-10  bg-${this.props.bgcolor}`}>
          <h3 className="text-center pt-4 ">
            <strong>
              <u>NewsLine</u>
            </strong>
            {` - Top ${this.capitalizeFirstLetter(
              this.props.catogary
            )} News Headlines   `}
          </h3>
          {this.state.loading && <Spinner/>}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {
                  this.state.articles.map((item) => {
                    return (
                      <div className="col-md-4 col-sm-12 my-3" key={item.url}>
                        <Newsitem
                          title={item.title ? item.title.slice(0, 40) : ""}
                          description={
                            item.description
                              ? item.description.slice(0, 85)
                              : ""
                          }
                          imageUrl={item.urlToImage}
                          url={item.url}
                          author={item.author}
                          date={item.publishedAt}
                          source={item.source.name}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}

export default News;
