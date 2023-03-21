import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { WagmiConfig, createClient } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Fonts from './theme/Fonts';

const client = createClient(
  getDefaultClient({
    appName: 'Jackpot Lottery on Sepolia',
    infuraId: process.env.REACT_APP_INFURA_ID,
    alchemyId: process.env.REACT_APP_ALCHEMY_ID,
    chains: [sepolia],
  })
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <WagmiConfig client={client}>
        <ConnectKitProvider theme='auto'>
          <App />
        </ConnectKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
