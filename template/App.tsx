import React from 'react';

// import { default as GlobalWrapper } from 'src/utils/wrappers/GlobalWrapper';
// import { GlobalWrapper } from '@/';
import { GlobalWrapper } from 'src/utils/wrappers';
// import { Box, Text } from '@gluestack-ui/themed';
import Gg from './src/components/Gg';
// import { GlobalWrapper } from './src/utils/wrappers';
function App(): React.JSX.Element {
	return (
		<GlobalWrapper>
			<Gg />
		</GlobalWrapper>
	);
}

export default App;
