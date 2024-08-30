import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import React from 'react';
import { Provider } from 'react-redux';
import { config } from '@gluestack-ui/config';
import { store } from '../../store';
import "@/global.css"

function App({ children }: { children: React.ReactNode }): React.JSX.Element {
	return (
        <Provider store={store}>
            {/* {console.log(JSON.stringify({ config }))} */}
            <GluestackUIProvider>
				{children}
			</GluestackUIProvider>
        </Provider>
    );
}

export default App;
