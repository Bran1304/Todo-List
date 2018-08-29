import React from 'react';
import renderer from 'react-test-renderer';
import TodoItem from './todoItem';

it('renders correctly', () => {
  const tree = renderer
    .create(<TodoItem
      title="Test"
      key={1}
      id={1}
      removeItem={jest.fn()}
      onTitleChange={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
