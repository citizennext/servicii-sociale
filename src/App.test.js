import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const Foo = props => <div>test</div>;
  ReactDOM.render(<App><Foo /></App>, div);
});
