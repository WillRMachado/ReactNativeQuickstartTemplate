import React from 'react';

import { GlobalWrapper } from 'src/utils/wrappers';
import MainScreen from './src/scenes/welcome/mainScreen/MainScreen';
import { NavigationContainer } from '@react-navigation/native';

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
1