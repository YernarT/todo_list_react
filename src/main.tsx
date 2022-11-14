// React
import React from 'react';
import ReactDOM from 'react-dom';

// Providers
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { SnackbarProvider } from 'notistack';
// App
import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<SnackbarProvider>
				<App />
			</SnackbarProvider>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root') as HTMLElement,
);
