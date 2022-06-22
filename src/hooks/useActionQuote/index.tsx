import React, { useContext } from 'react';
import { ActionsQuotesContext } from '../../contexts/actionsQuotes';

export const useActionQuote = () => {
	const context = useContext(ActionsQuotesContext);
	return context;
};
