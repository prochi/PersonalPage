import React, {Component} from 'react';
import {connect} from 'react-redux';
import UlPortfolio from './UlPortfolio';
import FolioImg from './FolioImg';
import OverlayInner from './OverlayInner';


class ActiveCategory extends Component {

  categoryAll() {
    return this.props.portfolio.map( work => {
      return (
        <li key={work.id}>
          <a href="">
            <FolioImg>
              <img src={work.img} alt=""/>
              <OverlayInner>
                <h4>{work.name}</h4>
                <p>{work.text}</p>
              </OverlayInner>
            </FolioImg>
          </a>
        </li>
      );
    });
  }

  categorySingle() {

    return this.props.portfolio.map( work => {
      if (this.props.category.name === work.category) {
        return (
          <li key={work.name}>
            <a href="">
              <FolioImg>
                <img src={work.img} alt=""/>
                <OverlayInner>
                  <h4>{work.name}</h4>
                  <p>{work.text}</p>
                </OverlayInner>
              </FolioImg>
            </a>
          </li>
        );
      }
    });

  }

  render() {
    if (this.props.category.name === "All") {
      return (
        <UlPortfolio>
          {this.categoryAll()}
        </UlPortfolio>
      );
    }
    return (
      <UlPortfolio>
        {this.categorySingle()}
      </UlPortfolio>
    );
  }
}

function mapStateToProps(state) {
  return {
    category: state.activeCategory,
    portfolio: state.portfoliolist,
  };
}

export default connect(mapStateToProps)(ActiveCategory);