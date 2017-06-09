import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { selectCategory } from '../../actions/index';
import UlFilter from './UlFilter';
import classnames from 'classnames'

class CategoryList extends Component {

  categoryList() {
    return this.props.workcategory.map( category => {
      return (
        <li 
          key={category.id}
          onClick={() => this.props.selectCategory(category)}
          className={classnames({'active': category.name === this.props.activeCategory.name})}   
        >
          {category.name}
        </li>
      );
    });
  }

  render() {
    return (
      <UlFilter>
        {this.categoryList()}
      </UlFilter>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCategory: state.activeCategory,
    workcategory: state.workcategory,
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectCategory: selectCategory}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CategoryList);