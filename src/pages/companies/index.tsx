import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
	StyleSheet,
	FlatList,
	Text,
	ListRenderItem,
	TouchableOpacity,
	StatusBar,
} from 'react-native';
import { Loading } from '../../components/loading';
import { api } from '../../services/api';

type Response = {
	id: number;
	cd_acao_rdz: string;
	nm_empresa: string;
	setor_economico: string;
	subsetor: string;
	segmento: string;
	segmento_b3: string;
	nm_segmento_b3: string;
	cd_acao: string;
	tx_cnpj: string;
	vl_cnpj: string;
};

export const Companies: React.FC = () => {
	const { navigate } = useNavigation();

	const [loading, setLoading] = useState(true);
	const [companies, setCompanies] = useState<Response[]>([]);

	useEffect(() => {
		(async () => {
			setLoading(true);
			const { data } = await api.get<Response[]>('empresa');

			setCompanies(data);
			setLoading(false);
		})();
	}, []);

	const renderItems: ListRenderItem<Response> = useCallback(({ item }) => {
		return (
			<TouchableOpacity
				onPress={() => {
					navigate('Quotes' as never, { id: item.id } as never);
				}}
			>
				<Text>{item.nm_segmento_b3}</Text>
				<Text>{item.cd_acao}</Text>
			</TouchableOpacity>
		);
	}, []);

	return loading ? (
		<Loading />
	) : (
		<FlatList
			data={companies}
			ListHeaderComponent={<Text style={styles.title}>Ticket empresas</Text>}
			renderItem={renderItems}
			keyExtractor={(item) => item.id.toString()}
			contentContainerStyle={styles.container}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 17,
		paddingTop: StatusBar.currentHeight + 30,
	},
	title: {
		fontSize: 22,
		lineHeight: 30,
		marginBottom: 10,
		fontWeight: '700',
		textAlign: 'center',
	},
});
