import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class NewsIndex extends React.Component {
  state = {}
  componentDidMount(){
    axios.get('api/news')
      .then(res => {
        this.setState({articles: res.data});
      });
  }

  render() {
    return(
      <section>
        <h2 className="title is-2">Latest News in the world of soft drinks</h2>
        <div className="columns is multiline text-is-center">
          {this.state.articles && this.state.articles.map(article =>{
            return (
              <Link to={article.url} key={article._id} className="column is-half card">
                <h2 className="title is-2">{article.title}</h2>
                <h4 className="title is-4">{article.description}</h4>
                <img src={article.urlToImage}></img>
                <small>Source:{article.source.name}, {article.publishedAt}</small>
              </Link>
            );
          })}
        </div>
      </section>
    );
  }
}


export default NewsIndex;