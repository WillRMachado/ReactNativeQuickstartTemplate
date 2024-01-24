import React from 'react';

// import { default as GlobalWrapper } from 'src/utils/wrappers/GlobalWrapper';
// import { GlobalWrapper } from '@/';
import { GlobalWrapper } from 'src/utils/wrappers';
import { Box, Text } from '@gluestack-ui/themed';
// import { GlobalWrapper } from '~/wrappers';
// import { GlobalWrapper } from './src/utils/wrappers';
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
