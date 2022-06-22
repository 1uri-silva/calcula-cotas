import React, { useCallback, useEffect } from 'react';
import {
	StyleSheet,
	View,
	Text,
	StatusBar,
	FlatList,
	ListRenderItem,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { RootRouteProps } from '../../routes';
import { Button } from '../../components/Button';
import { maskDate } from '../../utils/format-data';
import { ResponseQuote } from '../../contexts/actionsQuotes';
import { useActionQuote } from '../../hooks/useActionQuote';
import { Loading } from '../../components/loading';

export const Quotes: React.FC = () => {
	const {
		params: { id },
	} = useRoute<RootRouteProps<'Quotes'>>();
	const { goBack } = useNavigation();

	const {
		fetchCompany,
		fetchQuotes,
		quotes,
		company,
		quotesLoading,
		companyLoading,
	} = useActionQuote();

	useEffect(() => {
		(async () => await fetchCompany(id))();
	}, [fetchCompany]);

	useEffect(() => {
		(async () => await fetchQuotes(id))();
	}, [fetchQuotes]);

	const renderItems: ListRenderItem<ResponseQuote> = useCallback(({ item }) => {
		return (
			<View style={{ marginRight: 15 }}>
				<Text style={styles.categoryAction}>Data pregão</Text>
				<Text>{maskDate(item.dt_pregao)}</Text>
				<View>
					<Text style={styles.categoryAction}>Val da abertura</Text>
					<Text style={styles.valuesAction}>{item.vl_abertura.toFixed(2)}</Text>

					<Text style={styles.categoryAction}>Val do fechamento</Text>
					<Text style={styles.valuesAction}>
						{item.vl_fechamento.toFixed(2)}
					</Text>
				</View>

				<View>
					<Text style={styles.categoryAction}>Val max</Text>
					<Text style={styles.valuesAction}>{item.vl_maximo.toFixed(2)}</Text>

					<Text style={styles.categoryAction}>Val med</Text>
					<Text style={styles.valuesAction}>{item.vl_medio.toFixed(2)}</Text>
				</View>
			</View>
		);
	}, []);

	return quotesLoading || companyLoading ? (
		<Loading />
	) : (
		<View style={styles.container}>
			<Text style={styles.title}>Detalhes da ação</Text>
			<Text style={styles.category}>Setor</Text>
			<Text style={styles.values}>{company?.setor_economico}</Text>
			<Text style={styles.category}>Segmento</Text>
			<Text style={styles.values}>{company?.segmento}</Text>
			<Text style={styles.category}>Ação</Text>
			<Text style={styles.values}>{company?.cd_acao_rdz}</Text>
			<Text style={styles.category}>Cd da ação</Text>
			<Text style={styles.values}>{company?.cd_acao}</Text>

			<FlatList
				data={quotes}
				keyExtractor={(item) => item.id.toString()}
				renderItem={renderItems}
				horizontal
			/>
			<Button style={styles.button} title="Voltar" onPress={goBack} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 17,
		paddingTop: StatusBar.currentHeight + 50,
	},
	title: {
		fontSize: 22,
		lineHeight: 30,
		marginBottom: 10,
		fontWeight: '700',
		textAlign: 'center',
	},
	category: {
		fontSize: 17,
		lineHeight: 25,
		marginBottom: 5,
		fontWeight: '500',
	},
	values: {
		fontSize: 15,
		lineHeight: 22,
		marginBottom: 12,
		fontWeight: '300',
	},
	categoryAction: {
		marginTop: 8,
		fontSize: 13,
		lineHeight: 18,
		fontWeight: '500',
	},
	valuesAction: {
		fontSize: 15,
		lineHeight: 22,
		marginBottom: 8,
		fontWeight: '300',
	},
	button: {
		bottom: 10,
		height: 50,
		width: '100%',
		borderRadius: 8,
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'aqua',
	},
});
