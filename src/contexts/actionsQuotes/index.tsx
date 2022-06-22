import React, { createContext, useCallback, useState } from 'react';
import { api } from '../../services/api';

export type ActionsQuotes = {
	companyLoading: boolean;
	quotesLoading: boolean;
	company?: ResponseCompany;
	quotes: ResponseQuote[];
	fetchCompany: (id: number) => Promise<void>;
	fetchQuotes: (id: number) => Promise<void>;
};

export type ResponseCompany = {
	cd_acao: string;
	cd_acao_rdz: string;
	id: number;
	nm_empresa: string;
	nm_segmento_b3: string;
	segmento: string;
	segmento_b3: string;
	setor_economico: string;
	subsetor: string;
	tx_cnpj: string;
	vl_cnpj: string;
};

export type ResponseQuote = {
	id: number;
	tp_reg: number;
	dt_pregao: number;
	cd_bdi: string;
	cd_acao: string;
	tp_merc: number;
	nm_empresa_rdz: string;
	especi: string;
	prazot: string;
	moeda_ref: string;
	vl_abertura: number;
	vl_maximo: number;
	vl_minimo: number;
	vl_medio: number;
	vl_fechamento: number;
	vl_mlh_oft_compra: number;
	vl_mlh_oft_venda: number;
	vl_ttl_neg: number;
	qt_tit_neg: number;
	vl_volume: number;
	vl_exec_opc: number;
	in_opc: string;
	dt_vnct_opc: number;
	ft_cotacao: number;
	vl_exec_moeda_corrente: number;
	cd_isin: string;
	cd_acao_rdz: string;
};

export const ActionsQuotesContext = createContext({} as ActionsQuotes);

export const ActionsQuotesProvider: React.FC = ({ children }) => {
	const [company, setCompany] = useState<ResponseCompany>();
	const [quotes, setQuotes] = useState<ResponseQuote[]>([]);
	const [companyLoading, setCompanyLoading] = useState(false);
	const [quotesLoading, setQuotesLoading] = useState(false);

	const fetchCompany = useCallback(async (id: number) => {
		setCompanyLoading(true);
		const { data } = await api.get<ResponseCompany>(`empresa/${id}`);

		setCompany(data);
		setCompanyLoading(false);
	}, []);

	const fetchQuotes = useCallback(async (id: number) => {
		setQuotesLoading(true);
		const { data } = await api.get<ResponseQuote[]>(`empresa/${id}/cotacoes`);

		setQuotes(data.slice(0, 3));
		setQuotesLoading(false);
	}, []);

	return (
		<ActionsQuotesContext.Provider
			value={{
				quotes,
				company,
				fetchCompany,
				fetchQuotes,
				companyLoading,
				quotesLoading,
			}}
		>
			{children}
		</ActionsQuotesContext.Provider>
	);
};

export default ActionsQuotesProvider;
