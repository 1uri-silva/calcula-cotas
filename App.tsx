import React, { useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import * as ExpoUpdate from 'expo-updates';

import Routes from './src/routes';
import { ContextsProvider } from './src/contexts';

export default function App() {
	useEffect(() => {
		(async () => {
			if (!__DEV__) {
				const { isAvailable } = await ExpoUpdate.checkForUpdateAsync();
				if (isAvailable) {
					await ExpoUpdate.fetchUpdateAsync();
					await ExpoUpdate.reloadAsync();
				}
			}
		})();
	}, []);

	return (
		<>
			<ContextsProvider>
				<Routes />
			</ContextsProvider>
			<StatusBar networkActivityIndicatorVisible translucent animated />
		</>
	);
}
