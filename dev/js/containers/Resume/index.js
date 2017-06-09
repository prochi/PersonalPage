import React, {Component} from 'react';
import {connect} from 'react-redux';
import PageHead from '../../components/PageHead';
import ResumeContainer from './ResumeContainer';
import ResumeInfo from './ResumeInfo';
import SkillsInfo from './SkillsInfo';
import ServicesInfo from './ServicesInfo';
import SkillsBg from './SkillsBg';
import Sep2 from '../../components/Sep2';

class Resume extends Component {

  educationList() {
    return this.props.educationlist.map( education => {
      return (
        <li key={education.id}>
          <h5>{education.name}</h5>
          <span>{education.year}</span>
          <p>{education.text}</p>
        </li>
      );
    });
  }

  skillsList() {
    return this.props.skillslist.map( skills => {
      return (
        <li key={skills.id}>
          <p>{skills.name}<span>{skills.value}%</span></p>
          <SkillsBg>
            <span style={{width:skills.value + '%'}}></span>
          </SkillsBg>
        </li>
      );
    });
  }

  servicesList() {
    return this.props.serviceslist.map( services => {
      return (
        <li key={services.id}>
          <h5>{services.name}</h5>
        </li>
      );
    });
  }

  experienceList() {
    return this.props.experiencelist.map( experience => {
      return (
        <li key={experience.id}>
          <h5>{experience.name}</h5>
          <span>{experience.year}</span>
          <p>{experience.text}</p>
        </li>
      );
    });
  }

  render() {
    console.log(this.props)
    return (
      <ResumeContainer>
        <PageHead>
          <h3>Resume</h3>
        </PageHead>
        <ResumeInfo>
          <h4>Education</h4>
          <Sep2/>
          <ul>
            {this.educationList()}
          </ul>
        </ResumeInfo>
        <SkillsInfo>
          <h4>Skills</h4>
          <Sep2/>
          <ul>
            {this.skillsList()}
          </ul>
        </SkillsInfo>
        <ServicesInfo>
          <h4>Services</h4>
          <Sep2/>
          <ul>
            {this.servicesList()}
          </ul>
        </ServicesInfo>
        <ResumeInfo>
          <h4>Work Experience</h4>
          <Sep2/>
          <ul>
            {this.experienceList()}
          </ul>
        </ResumeInfo>
      </ResumeContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    educationlist: state.educationlist,
    experiencelist: state.experiencelist,
    serviceslist: state.serviceslist,
    skillslist: state.skillslist,
  };
}


export default connect(mapStateToProps)(Resume);