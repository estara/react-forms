import { render } from '@testing-library/react';
import Todo from './Todo';

test('renders without crashing', () => {
  render(<Todo />);
});

it("matches snapshot", function() {
  const {asFragment} = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});
