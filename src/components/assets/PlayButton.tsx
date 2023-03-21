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
          chain,
          truncatedAddress,
        }) => {
          return (
            <Button
              borderRadius='3xl'
              padding='5'
              size='lg'
              onClick={show}
              className='play-button'
            >
              {isConnected && !isConnecting && 'Log Out '}
              {isConnecting && (
                <Spinner
                  thickness='2px'
                  speed='0.65s'
                  emptyColor='gray'
                  color='blue'
                  size='lg'
                />
              )}
              {!isConnected && !isConnecting && 'Play Now'}
            </Button>
          );
        }}
      </ConnectKitButton.Custom>
    </>
  );
};

export default PlayButton;
