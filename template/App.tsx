import React from 'react';

import { GlobalWrapper } from 'src/utils/wrappers';
import MainScreen from './src/scenes/welcome/mainScreen/MainScreen';
function App(): React.JSX.Element {
	return (
		<GlobalWrapper>
			<MainScreen />
		</GlobalWrapper>
	);
}

export default App;
