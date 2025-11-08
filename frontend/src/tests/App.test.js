// App.test.js - Frontend snapshot test
import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders home page snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});