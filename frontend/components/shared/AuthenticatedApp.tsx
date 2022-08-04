import { useEffect, useMemo, useState } from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { authenticatedFetcher } from '../../lib/authenticatedFetcher';
import { TokenContext } from '../../lib/tokenContext';
import { SWRConfig } from 'swr';

const AuthenticatedApp2 = ({children}) => {
	//Fetch accessToken from API audience
	const { getAccessTokenSilently } = useAuth0();
	const [token, setToken] = useState('');

	useEffect(() => {
		getAccessTokenSilently().then((myToken) => {
			console.log('----TOKEN----', myToken);
			setToken(myToken);
		});
	}, []);

	return (
		<SWRConfig value={{ fetcher: authenticatedFetcher(token) }}>
			<TokenContext.Provider
				value={{
					auth0Token: { value: token },
				}}
			>
				{children}
			</TokenContext.Provider>
		</SWRConfig>
	);
};

export const AuthenticatedApp = ({children}) => {
	const origin = useMemo(() => {
		if (typeof window != 'undefined') {
			return window.location.origin;
		}
	}, []);

	return (
		<Auth0Provider
			domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
			clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
			redirectUri={origin}
			audience='cacti-co'
			scope='openid profile email'
		>
			<AuthenticatedApp2>
				{children}
			</AuthenticatedApp2>

		</Auth0Provider>
	);
};
