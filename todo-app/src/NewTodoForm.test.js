import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('renders without crashing', () => {
  render(<NewTodoForm />);
});

it("matches snapshot", function() {
  const {asFragment} = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
