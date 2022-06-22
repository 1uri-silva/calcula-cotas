import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

import { Home } from '../pages/home';
import { Companies } from '../pages/companies';

const TabsRoutes = () => {
	const renderIcon = useCallback(
		(route: string, size: number, color: string) => {
			switch (route) {
				case 'Home':
					return <Ionicons name="home-outline" size={size} color={color} />;
				case 'Companies':
					return <Ionicons name="ios-book-outline" size={size} color={color} />;

				default:
					return;
			}
		},
		[]
	);
	return (
		<Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveTintColor: '#ddffe5',
				tabBarInactiveTintColor: '#dfd53',
				tabBarActiveBackgroundColor: '#33e5',
				tabBarIcon: ({ color, size }) => renderIcon(route.name, size, color),
			})}
		>
			<Screen name="Home" component={Home} />
			<Screen name="Companies" component={Companies} />
		</Navigator>
	);
};

export default TabsRoutes;
