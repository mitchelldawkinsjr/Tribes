import React from 'react';
import ReactDOM from 'react-dom';
import Tribes from './Tribes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tribes />, div);
  ReactDOM.unmountComponentAtNode(div);
});
