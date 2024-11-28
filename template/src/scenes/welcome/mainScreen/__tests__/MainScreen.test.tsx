import { render, screen } from '@testing-library/react-native';
import MainScreen from '../MainScreen';
import React from 'react';
import { GlobalWrapper } from '../../../../utils/wrappers';

describe('MainScreen component should render correctly', () => {
	test('renders all text elements', () => {
		const component = (
			<GlobalWrapper>
				<MainScreen />
			</GlobalWrapper>
		);

		render(component);
	});
});
