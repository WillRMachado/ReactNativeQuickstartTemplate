import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
// import { config } from '@gluestack-ui/config';
// import { StyledProvider, theme } from '@gluestack-ui/themed';

// import { GlobalWrapper } from 'src/utils/wrappers';

import { config } from '@gluestack-ui/config';
import { StyledProvider } from '@gluestack-ui/themed';
import { expect, it } from '@jest/globals';
// import GlobalWrapperMocked from '../../utils/wrappers/GlobalWrapperMocked';
import Gg from '../Gg';

// // jest.useFakeTimers();
// it('renders correctly', () => {
// 	const a = renderer
// 		.create(
// 			<GlobalWrapperMocked>
// 				<Gg />,
// 			</GlobalWrapperMocked>,
// 		)
// 		.toJSON();
// 	expect(a).toBeTruthy();
// });

it('Splash Screen', () => {
	const tree = renderer
		.create(
			<StyledProvider config={config}>
				<Gg />
			</StyledProvider>,
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
