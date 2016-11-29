import React from 'react';
import ReactDOM from 'react-dom';
import HomeMap from '../HomeMap';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeMap />, div);
});
