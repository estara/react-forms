import { render, screen } from '@testing-library/react';
import Box from './Box';

test('renders without crashing', () => {
  render(<Box key='1' 
    id='1'
    handleRemove='removeBox' 
    width='5' 
    height='5'
    backgroundColor='green'/>);
});

it("matches snapshot", function() {
    const {asFragment} = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});