import React, {Component} from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { selectPage } from '../../actions/index';
import NavigationContainer from './NavigationContainer';
import UL from './UL';
import LI from './LI';
import classnames from 'classnames'

class Navigation extends Component {

  pagesList() {
    return this.props.pagesList.map( page => {
      return (
        <LI 
          key={page.id}
          onClick={() => this.props.selectPage(page)}
          className={classnames({'active': page.name === this.props.activePage.name})}   
        >
          <Link to={page.link}>{page.name}</Link>
        </LI>
      );
    });
  }

  render() {
    return (
      <NavigationContainer>
        <UL>
          {this.pagesList()}
        </UL>
      </NavigationContainer>
    )
  }
}

function mapStateToProps(state) {
  return {
    pagesList: state.pagesList,
    activePage: state.activePage,
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectPage: selectPage}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Navigation);