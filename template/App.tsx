import React from 'react';

import './global.css';
import { GlobalWrapper } from '@/src/utils/wrappers';

import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './src/scenes/welcome/mainScreen/MainScreen';

function App(): React.JSX.Element {
	return (
		<NavigationContainer>
			<GlobalWrapper>
				<MainScreen />
			</GlobalWrapper>
		</NavigationContainer>
	);
}

export default App;
