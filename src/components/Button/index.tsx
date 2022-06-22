import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TouchableOpacityProps,
} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
	title: string;
};
export const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
	return (
		<View style={styled.ContainerButton}>
			<TouchableOpacity {...rest}>
				<Text style={styled.TitleButton}>{title}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styled = StyleSheet.create({
	ContainerButton: {
		width: '95%',
		padding: '2%',
		marginLeft: 6,
	},
	TitleButton: {
		textAlign: 'center',
		fontSize: 17,
		fontWeight: '400',
	},
});
