import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export const Loading: React.FC = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<ActivityIndicator color="blue" size="large" />
		</View>
	);
};
