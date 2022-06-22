import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

import StackRoute from './stack.routes';

export type RootStackParamList = {
	Home: undefined;
	Quotes: { id: number };
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
	RouteProp<RootStackParamList, RouteName>;

export default function Routes() {
	return (
		<NavigationContainer>
			<StackRoute />
		</NavigationContainer>
	);
}
