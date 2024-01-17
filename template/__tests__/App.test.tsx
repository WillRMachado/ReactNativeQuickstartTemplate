import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { config } from '@gluestack-ui/config';
import { StyledProvider } from '@gluestack-ui/themed';

import { it } from '@jest/globals';
import App from '../App';

it('renders correctly', () => {
	renderer
		.create(
			<StyledProvider config={config}>
				<App />
			</StyledProvider>,
		)
		.toJSON();
});
