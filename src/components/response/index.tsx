import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { maskCurrency } from '../../utils/formatPrice';

type ResponseProps = {
	cotas: string;
	cotacao: string;
	dividendo: string;
	quantidade: string;
};

export const Response: React.FC<ResponseProps> = ({
	cotacao,
	cotas,
	dividendo,
	quantidade,
}) => {
	const totalCotasAtualizado =
		Number(cotas?.replace(/\D/g, '')) + Number(quantidade?.replace(/\D/g, ''));
	const QuantoInvestir =
		Number(cotacao?.replace(/\D/g, '')) *
		Number(quantidade?.replace(/\D/g, ''));
	const TotalGanhar =
		totalCotasAtualizado * Number(dividendo?.replace(/\D/g, ''));

	return (
		<View style={styles.ContainerResponse}>
			<Text style={styles.TextResponse}>
				Total de cotas: {totalCotasAtualizado || cotas}
			</Text>
			<Text style={styles.TextResponse}>
				Cotação: {maskCurrency(cotacao?.toString())}
			</Text>
			<Text style={styles.TextResponse}>
				Dividendo: {maskCurrency(dividendo?.toString())}
			</Text>
			<Text style={styles.TextResponse}>
				Quanto investir: {maskCurrency(QuantoInvestir?.toString())}
			</Text>
			<Text style={styles.TextResponseTotal}>
				Total a ganhar: {maskCurrency(TotalGanhar?.toString())}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	ContainerResponse: {
		marginTop: 30,
		width: '95%',
		padding: '2%',
	},
	TextResponse: {
		fontSize: 14,
		marginBottom: 5,
		textAlign: 'center',
	},
	TextResponseTotal: {
		fontSize: 16,
		fontWeight: '600',
		marginBottom: 5,
		textAlign: 'center',
	},
});
