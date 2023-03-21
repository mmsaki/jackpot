import { Button, useToast, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import { useContractRead } from 'wagmi';
import lottery from '../../abi/Lottery.json';

const ToastBetOpen = () => {
  const toast = useToast();
  let { data, error } = useContractRead({
    address: '0x921fFD1C2471b153fbbF374E6887A662219b2dFC',
    abi: lottery.abi,
    functionName: 'betsOpen',
  });

  return (
    <>
      <Button
        height='40px'
        width='200px'
        color='green'
        bg='gray.100'
        mt='5'
        borderRadius='lg'
        onClick={() => {
          toast({
            title: `Checking if Bets are open from etherscan. Results : ${data}`,
            status: 'info',
            isClosable: true,
            containerStyle: {
              bg: 'blue',
              borderRadius: '2xl',
            },
          });
        }}
      >
        Check Status
      </Button>
      {error &&
        (() =>
          toast({
            title: `An error occured preparing the transaction: ${error?.message}`,
            status: 'info',
            isClosable: true,
            containerStyle: {
              bg: 'red',
              borderRadius: '2xl',
            },
          }))}
    </>
  );
};

export default ToastBetOpen;
