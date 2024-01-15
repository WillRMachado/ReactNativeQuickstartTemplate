import React from 'react';
// import {StyleSheet} from 'react-native';

import { Provider } from 'react-redux';
import { config } from '@gluestack-ui/config';
import { Box, GluestackUIProvider, Text } from '@gluestack-ui/themed';
import { store } from './src/store';

function App(): React.JSX.Element {
	// const isDarkMode = useColorScheme() === 'dark';

	// const backgroundStyle = {
	//   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	// };

	return (
		<Provider store={store}>
			<GluestackUIProvider config={config}>
				<Box>
					<Text>Hello World!</Text>
				</Box>
			</GluestackUIProvider>
		</Provider>
	);
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
