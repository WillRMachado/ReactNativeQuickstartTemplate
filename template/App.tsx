import React from 'react';

import './global.css';
import { GluestackUIProvider } from '@/src/gluestack/ui/gluestack-ui-provider';

// import { GlobalWrapper } from 'src/utils/wrappers';
// import MainScreen from './src/scenes/welcome/mainScreen/MainScreen';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
	return (
		<GluestackUIProvider mode="light">
			<NavigationContainer>
				{/* <></> */}
				{/* <GlobalWrapper> */}
				{/* <MainScreen /> */}
				{/* </GlobalWrapper> */}
			</NavigationContainer>
		</GluestackUIProvider>
	);
}

export default App;
