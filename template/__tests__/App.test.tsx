import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
// import { config } from '@gluestack-ui/config';
// import { StyledProvider } from '@gluestack-ui/themed';

import { GlobalWrapper } from 'src/utils/wrappers';

import { it, jest } from '@jest/globals';
import App from '../App';
jest.useFakeTimers();
it('renders correctly', () => {
	renderer
		.create(
			// <StyledProvider config={config}>
			<GlobalWrapper>
				<App />,
			</GlobalWrapper>,
			// </StyledProvider>,
		)
		.toJSON();
});
