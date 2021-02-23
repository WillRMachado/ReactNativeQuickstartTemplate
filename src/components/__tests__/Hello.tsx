// import React from 'react';
// import MockedNavigator from '../../../jestHelpers/mock/mockedNavigator';
import screenSnapshotCreator from '../../../jestHelpers/screenSnapshotCreator';

import Hello from '../Hello';

it('renders correctly with defaults', async () => {
  const screen = screenSnapshotCreator(Hello);

  expect(screen).toMatchSnapshot();
});
