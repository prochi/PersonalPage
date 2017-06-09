import React, {Component} from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavigationContainer from './NavigationContainer';
import UL from './UL';
import LI from './LI';
import classnames from 'classnames'

class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <UL>
          <LI><Link to="/">Profile</Link></LI>
          <LI><Link to="/work">Work</Link></LI>
          <LI><Link to="/resume">Resume</Link></LI>
          <LI><Link to="/blog">Blog</Link></LI>
          <LI><Link to="/contact">Contact</Link></LI>
        </UL>
      </NavigationContainer>
    )
  }
}

export default Navigation;