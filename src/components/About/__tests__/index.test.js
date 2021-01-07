// __tests__/About.test.js 
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import About from '..';

// clean up memory after each test, so data does not give false results 
afterEach(cleanup);

describe('About component', () => {
    // First Test
    it('renders', () => {
      render(<About />);
    });
  
    // Second Test
    it('matches snapshot DOM node structure', () => {
        const tree = renderer.create(<About />).toJSON();
        expect(tree).toMatchSnapshot();
        // expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      })
  });

//   const { asFragment } = render(<About />);

//   expect(asFragment()).toMatchSnapshot();