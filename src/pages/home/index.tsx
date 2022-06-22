import React, { useState } from 'react';
import {
	KeyboardAvoidingView,
	ScrollView,
	StyleSheet,
	Text,
	Platform,
} from 'react-native';

import { Input } from '../../components/input';
import { Response } from '../../components/response';
import { maskCurrency } from '../../utils/formatPrice';

export const Home: React.FC = () => {
	const [totalCotas, setTotalCotas] = useState('');
	const [cotacaoAtual, setCotacaoAtual] = useState('');
	const [dividendo, setDividendo] = useState('');
	const [quantidade, setQuantidade] = useState('');

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}
		>
			<ScrollView style={styles.containerScroll}>
				<Text style={styles.title}> Cálculo de rendimentos </Text>
				<Input
					placeHolderColor="#000"
					onChangeText={setTotalCotas}
					value={totalCotas}
					keyboardType="numeric"
					placeholder="Digite o total de suas cotas"
					title="Total de cotas"
				/>

				<Input
					placeHolderColor="#000"
					onChangeText={setCotacaoAtual}
					value={maskCurrency(cotacaoAtual)}
					placeholder="Digite a cotação atual"
					title="Cotação atual"
					keyboardType="numeric"
				/>

				<Input
					placeHolderColor="#000"
					onChangeText={setDividendo}
					value={maskCurrency(dividendo)}
					placeholder="Digite o preço de dividendo"
					title="Total dividendo"
					keyboardType="numeric"
				/>

				<Input
					placeHolderColor="#000"
					onChangeText={setQuantidade}
					value={quantidade}
					placeholder="Digite quanto quer comprar"
					title="Quanto comprar"
					keyboardType="numeric"
				/>

				<Response
					cotacao={cotacaoAtual}
					cotas={totalCotas}
					dividendo={dividendo}
					quantidade={quantidade}
				/>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ddd',
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerScroll: {
		width: '100%',
	},
	title: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: '600',
		marginTop: '40%',
		marginBottom: '20%',
	},
});
