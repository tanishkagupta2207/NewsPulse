import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `NewsPulse - Top ${this.capitalizeFirstLetter(
      this.props.category
    )} Headlines`;
  }

  async componentDidMount() {
    this.updateNews();
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(50); 
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults<=100 ? parsedData.totalResults : 100,
      loading: false,
    });
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${nextPage}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      page: nextPage,
    });
  };

  

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "30px 0px" }}>
          NewsPulse - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={((this.state.page) * (this.props.pageSize)) < this.state.totalResults}
          loader={<Spinner />}
        >
            <div className="row">
              {this.state.articles.map((element) => {
                  return (
                    element.title !== "[Removed]" && (
                      <div className="col-md-3" key={element.url}>
                        <NewsItem
                          title={element.title ? element.title : ""}
                          description={
                            element.description ? element.description : ""
                          }
                          imageURL={element.urlToImage}
                          newsURL={element.url}
                          author={element.author}
                          date={element.publishedAt}
                          source={element.source.name}
                        />
                      </div>
                    )
                  );
                })}
            </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
