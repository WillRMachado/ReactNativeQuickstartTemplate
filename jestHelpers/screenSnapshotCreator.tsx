import React from 'react';
import renderer from 'react-test-renderer';
import MockedNavigator from './mock/mockedNavigator';
import {act} from 'react-test-renderer';

export default async (Component: React.Component) => {
  //initiated with random number in order to avoid matching a broken snapshot
  let screen: any = Math.random();
  await act(async () => {
    screen = await renderer
      .create(<MockedNavigator component={Component} />)
      .toJSON();
  });

  return screen;
};
