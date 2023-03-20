import React from 'react';

import { ConnectKitButton } from 'connectkit';
import { Button } from '@chakra-ui/react';

const PlayButton = () => {
  return (
    <>
      <ConnectKitButton.Custom>
        {({
          isConnected,
          isConnecting,
          show,
          hide,
          address,
          ensName,
          chain,
          truncatedAddress,
        }) => {
          return (
            <Button onClick={show} className='play-button'>
              {isConnected ? 'Log Out' : 'Play Now'}
            </Button>
          );
        }}
      </ConnectKitButton.Custom>
    </>
  );
};

export default PlayButton;
