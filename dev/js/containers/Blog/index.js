import React, {Component} from 'react';
import {connect} from 'react-redux';
import PageHead from '../../components/PageHead';
import BlogContainer from './BlogContainer';
import BlogArticle from './BlogArticle';
import ArticleImg from './ArticleImg';
import ArticleContent from './ArticleContent';

class Blog extends Component {

  blogArticles() {
    return this.props.blogarticles.map( blog => {
      return (
        <BlogArticle key={blog.id}>
          <ArticleImg>
            <img src={blog.img} />
          </ArticleImg>
          <ArticleContent>
            <h3>{blog.name}</h3>
            <p>{blog.short}</p>
          </ArticleContent>
        </BlogArticle>
      );
    });
  }

  render() {
    return (
      <BlogContainer>
        <PageHead>
          <h3>Blog</h3>
        </PageHead>
        {this.blogArticles()}
      </BlogContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    blogarticles: state.blogarticles,
  };
}


export default connect(mapStateToProps)(Blog);