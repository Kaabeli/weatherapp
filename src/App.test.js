import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Weather from './components/Weather';
import Searchbar from './components/Searchbar';
import renderer from 'react-test-renderer';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Weather renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Weather />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Searchbar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Searchbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('App renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Searchbar renders correctly', () => {
  const tree = renderer.create(<Searchbar />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Weather renders correctly', () => {
  const tree = renderer.create(<Weather />).toJSON();
  expect(tree).toMatchSnapshot();
});