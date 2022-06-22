import React from 'react';
import ActionsQuotesProvider from './actionsQuotes';

export const ContextsProvider: React.FC = ({ children }) => {
	return <ActionsQuotesProvider>{children}</ActionsQuotesProvider>;
};
