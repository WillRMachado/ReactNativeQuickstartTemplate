import React from 'react';
import renderer from 'react-test-renderer';
import MockedNavigator from './mock/mockedNavigator';
import {act} from 'react-test-renderer';

export default async (Component: React.FunctionComponent) => {
  let screen: any = null;
  await act(async () => {
    screen = await renderer.create(<MockedNavigator component={Component} />);
  });

  return screen;
};
