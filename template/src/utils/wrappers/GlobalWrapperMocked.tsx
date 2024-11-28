import React from 'react';

import { Provider } from 'react-redux';
import { GluestackUIProvider } from '@/src/gluestack/ui/gluestack-ui-provider/index';
import { store } from '../../store';

function App({ children }: { children: React.ReactNode }): React.JSX.Element {
	return (
		<Provider store={store}>
			<GluestackUIProvider mode="light">{children}</GluestackUIProvider>
		</Provider>
	);
}

export default App;
