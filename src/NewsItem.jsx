import React, { Component } from 'react';
import './NewsItem.css'; // Import your CSS file

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, content } = this.props;

        return (
            <div className='my-3'>
                <div className="card App-card"> {/* Add App-card class */}
                    <img
                        src={!imageUrl ? "https://demofree.sirv.com/nope-not-here.jpg" : imageUrl}
                        className="card-img-top App-image" // Add App-image class
                        alt={content}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = "https://demofree.sirv.com/nope-not-here.jpg";
                        }}
                    />
                    <div className="card-body App-card-body"> {/* Add App-card-body class */}
                        <h5 className="card-title App-title">{title}</h5> {/* Add App-title class */}
                        <p className="card-text App-description">{description} . . .</p> {/* Add App-description class */}
                        <a
                            href={newsUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className="btn btn-sm btn-primary App-link" // Add App-link class
                        >
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
