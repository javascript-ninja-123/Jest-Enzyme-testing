import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import 'jest-prop-type-error'
Enzyme.configure({adapter: new EnzymeAdapter()})