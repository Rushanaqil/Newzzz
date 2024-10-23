import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3" style={{margin: "1rem"}}>
        <div className="card" >
        <img src={!imageUrl?"https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}...
            <span class="position-absolute top-0 translate-middle badge bg-primary" style={{ zindex: "1", left:"95%" ,fontSize: '0.7rem', padding: '0.5em 0.5em' }}>
              {source}
              <span class="visually-hidden">unread messages</span>
            </span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
