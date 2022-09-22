import React, { Component } from "react";
import CarItem from "./CarItem";

export class Cars extends Component {
  constructor() {
    console.log("Hello I am a constructor from News component");
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  //lifecycle method hota ye run tb hoga jb aappka render hoga
  // fetching newsapi
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=e8b1ec50962b4890a13ffc8b7a22d318&page=1&pageSize=20";
    let data = await fetch(url);
    let parsData = await data.json();
    console.log(parsData);
    this.setState({
      articles: parsData.articles,
      totalResults: parsData.totalResults,
    });
  }
  handlePreviousClick = async () => {
    console.log("Previous");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e8b1ec50962b4890a13ffc8b7a22d318&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsData = await data.json();
    console.log(parsData);

    this.setState({
      page: this.state.page - 1,
      articles: parsData.articles,
    });
  };
  handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e8b1ec50962b4890a13ffc8b7a22d318&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsData = await data.json();
      console.log(parsData);

      this.setState({
        page: this.state.page + 1,
        articles: parsData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2> Top Headlines</h2>

        <div className="row my-4">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <CarItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newUrl={element.url}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between ">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            class="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default Cars;
//element.title.slice(o,45) is used for set word character
// flex box using in button
// this. kr ke call krte jb hum class ke ander hote hai
// onclick fuction use kr rhe next amd previous button mein pager next page ke liye