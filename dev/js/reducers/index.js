import {combineReducers} from 'redux';
import BlogReducer from './reducer-blog';
import EducationReducer from './reducer-education';
import ExperienceReducer from './reducer-experience';
import PortfolioReducer from './reducer-portfolio';
import SkillsReducer from './reducer-skills';
import ServicesReducer from './reducer-services';
import WorkCategory from './reducer-work-category';
import ActiveCategoryReducer from './reducer-work-activecategory';
import ActivePageReducer from './reducer-activepage';
import PagesReducer from './reducer-pages';

const allReducers = combineReducers({
  blogarticles: BlogReducer,
  educationlist: EducationReducer,
  experiencelist: ExperienceReducer,
  portfoliolist: PortfolioReducer,
  skillslist: SkillsReducer,
  serviceslist: ServicesReducer,
  pagesList: PagesReducer,
  workcategory: WorkCategory,
  activePage: ActivePageReducer,
  activeCategory: ActiveCategoryReducer,
});

export default allReducers