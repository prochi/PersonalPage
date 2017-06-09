import React from 'react';
import _Profile from './_Profile';
import _PersonalInfo from './_PersonalInfo';
import Sep1 from '../../components/Sep1';
import Sep2 from '../../components/Sep2';


const Profile = () => (
  <_Profile>
    <h2>Hello, I am <span>Frantisek Voprsalek</span><br/>Designer and Front-end Developer</h2>
    <Sep1/>
    <p>I have ten years experience as a web/interface designer. I have a love of clean, elegant styling, and I have lots of experience in the production of CSS and (X)HTML for modern websites. I have a reasonable grasp of using JavaScript frameworks, specifically jQuery.</p>
    <_PersonalInfo>
      <h4>Personal Info</h4>
      <Sep2/>
      <ul>
        <li>
          <div>
            <em>name</em>
            <span>Frantisek Voprsalek</span>
          </div>
        </li>
        <li>
          <div>
            <em>date of birth</em>
            <span>September 06, 1976</span>
          </div>
        </li>
        <li>
          <div>
            <em>e-mail</em>
            <span>info@yourdomain.com</span>
          </div>
        </li>
        <li>
          <div>
            <em>address</em>
            <span>121 King St, Melbourne VIC</span>
          </div>
        </li>
        <li>
          <div>
            <em>phone</em>
            <span>012-3456-7890</span>
          </div>
        </li>
        <li>
          <div>
            <em>website</em>
            <span>www.themeforest.net</span>
          </div>
        </li>
      </ul>
    </_PersonalInfo>
  </_Profile>
);

export default Profile;