// jest.useFakeTimers();
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { config } from '@gluestack-ui/config';
import { StyledProvider } from '@gluestack-ui/themed';

import { it, jest } from '@jest/globals';
import App from '../App';
// Note: import explicitly to use the types shipped with jest.

// Note: test renderer must be required after react-native.

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

it('renders correctly', () => {
	renderer
		.create(
			<StyledProvider config={config}>
				<App />
			</StyledProvider>,
		)
		.toJSON();
});
