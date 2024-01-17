import React from 'react';

import { Provider } from 'react-redux';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { store } from '../../store';

function App({ children }: { children: React.ReactNode }): React.JSX.Element {
	return (
		<Provider store={store}>
			<GluestackUIProvider config={config}>
				{children}
			</GluestackUIProvider>
		</Provider>
	);
}

export default App;
