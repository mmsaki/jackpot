import React from 'react';
import { Spinner } from '@chakra-ui/react';
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
            <Button onClick={show} className='play-button' ml='6' mr='4'>
              {isConnected && 'Log Out'}
              {isConnecting && (
                <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray'
                  color='blue'
                  size='lg'
                />
              )}
              {!isConnected && 'Play Now'}
            </Button>
          );
        }}
      </ConnectKitButton.Custom>
    </>
  );
};

export default PlayButton;
