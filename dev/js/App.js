import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom';
import MainContent from './components/MainContent';
import Slider from './components/Slider';
import Section from './components/Section';
import Footer from './components/Footer';
import LeftContent from './components/LeftContent';
import RightContent from './components/RightContent';
import Navigation from './containers/Navigation';
import Profile from './containers/Profile';
import ProfilePic from './containers/ProfilePic';
import Work from './containers/Work';
import Resume from './containers/Resume';
import Blog from './containers/Blog';
import Contact from './containers/Contact';
import Copyright from './containers/Copyright';
import Social from './containers/Social';

require('../scss/style.scss');

const App = () => (
  <Router history={browserHistory}>
    <MainContent>
      <LeftContent>
        <ProfilePic/>
        <Navigation/>
      </LeftContent>
      <RightContent>
        <Slider>
          <Section>
            <Route exact path="/" component={Profile}/>
            <Route path="/work" component={Work}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/contact" component={Contact}/>
          </Section>
        </Slider>
        <Footer>
          <Copyright/>
          <Social/>
        </Footer>
      </RightContent>
    </MainContent>
  </Router>
);

export default App;