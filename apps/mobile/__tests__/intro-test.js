import renderer from 'react-test-renderer';
import Intro from '../app/intro';

test('renders correctly', () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});