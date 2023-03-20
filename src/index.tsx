import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { WagmiConfig, createClient } from 'wagmi';
import { goerli } from 'wagmi/chains';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';
import { ChakraProvider } from '@chakra-ui/react';

const client = createClient(
  getDefaultClient({
    appName: 'Jackpot Lottery on Goerli',
    infuraId: process.env.REACT_APP_INFURA_ID,
    alchemyId: process.env.REACT_APP_ALCHEMY_ID,
    chains: [goerli],
  })
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <WagmiConfig client={client}>
        <ConnectKitProvider theme='auto'>
          <App />
        </ConnectKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
