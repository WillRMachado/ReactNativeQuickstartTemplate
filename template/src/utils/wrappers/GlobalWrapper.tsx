import React from 'react';

import { Provider } from 'react-redux';
import { store } from '../../store';

function App({ children }: { children: React.ReactNode }): React.JSX.Element {
	return (
		<Provider store={store}>
				{children}
		</Provider>
	);
}

export default App;
