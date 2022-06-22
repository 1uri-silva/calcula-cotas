import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Quotes } from '../pages/quotes';
import TabsRoutes from './tab.routes';

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoute: React.FC = () => {
	return (
		<Navigator
			initialRouteName="TabsRoutes"
			screenOptions={{
				animation: 'slide_from_right',
				headerShown: false,
			}}
		>
			{/* TABS ROUTES */}
			<Screen
				name="TabsRoutes"
				component={TabsRoutes}
				options={{ headerShown: false }}
			/>
			{/* TABS ROUTES */}
			<Screen name="Quotes" component={Quotes} />
		</Navigator>
	);
};

export default StackRoute;
