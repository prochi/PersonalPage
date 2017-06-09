import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageHead from '../../components/PageHead';
import WorkContainer from './WorkContainer';
import CategoryList from './CategoryList';
import ActiveCategory from './ActiveCategory';

class Work extends Component {
  render() { 
    return (
      <WorkContainer>
        <PageHead>
          <h3>Portfolio</h3>
        </PageHead>
        <CategoryList />
        <ActiveCategory />
      </WorkContainer>
    );
  }
}

export default Work;