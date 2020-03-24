import React from 'react';
import renderer from 'react-test-renderer';
import TestComponentDemo from './TestComponentDemo';

test('renders correctly', () => {
  const tree = renderer.create(<TestComponentDemo />).toJSON();
  expect(tree).toMatchSnapshot();
});
