import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require("isomorphic-fetch");
configure({ adapter: new Adapter() });