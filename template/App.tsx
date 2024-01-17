import React from 'react';

import { Box, Text } from '@gluestack-ui/themed';
import { GlobalWrapper } from './src/utils/wrappers';

function App(): React.JSX.Element {
	return (
		<GlobalWrapper>
			<Box>
				<Text>Hello World!</Text>
			</Box>
		</GlobalWrapper>
	);
}

export default App;
