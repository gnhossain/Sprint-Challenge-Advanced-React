import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  // ready to test!
});

it('renders "Players" text', () => {
  const wrapper = rtl.render(<App />);
  const hasTitleText = wrapper.queryByText(/woman's world cup players/i);
});