import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsURL, author, date, source } =
      this.props;

    const formattedSource =
      source.length <= 15 ? source : `${source.slice(0, 12)}...`;

    return (
      <div className="container my-3">
        <div className="card">
          <div>
            <span
              className="badge rounded-pill bg-danger"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0",
              }}
            >
              {formattedSource}
            </span>
          </div>
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsURL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
