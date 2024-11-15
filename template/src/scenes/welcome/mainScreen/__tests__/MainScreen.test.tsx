import { render, screen } from '@testing-library/react-native';
// import { MMKV } from 'react-native-mmkv';
// import { ThemeProvider } from '@/theme';
import MainScreen from '../MainScreen';
import React from 'react';
import { GlobalWrapper } from '../../../../utils/wrappers';
import { store } from '../../../../store';
import { Provider } from 'react-redux';

describe('MainScreen component should render correctly', () => {
	// let storage: MMKV;

	// beforeAll(() => {
	//     storage = new MMKV();
	// });

	test('renders all text elements', () => {
		const component = (
			// <ThemeProvider storage={storage}>
			<GlobalWrapper>
			{/* // <Provider store={store}> */}
				<MainScreen />
			{/* // </Provider> */}
			 </GlobalWrapper>
			// </ThemeProvider>
		);

		render(component);

		// const textElements = screen.getAllByText('oi');
		// expect(textElements).toHaveLength(5);
	});

	// test('renders within Box container', () => {
	// 	const component = (
	// 		<ThemeProvider storage={storage}>
	// 			<MainScreen />
	// 		</ThemeProvider>
	// 	);

	// 	render(component);

	// 	const box = screen.getByTestId('box-container');
	// 	expect(box).toBeDefined();
	// 	expect(box.children.length).toBe(5);
	// });
});
