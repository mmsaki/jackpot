import React from 'react';

import { ConnectKitButton } from 'connectkit';

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
            <button onClick={show} className='play-button'>
              {isConnected ? 'Log Out' : 'Play Now'}
            </button>
          );
        }}
      </ConnectKitButton.Custom>
    </>
  );
};

export default PlayButton;
