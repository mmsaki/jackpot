import { Button, useToast, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import { useContractRead } from 'wagmi';
import lottery from '../../abi/Lottery.json';

const ToastBetOpen = () => {
  const toast = useToast();
  const { data, isError, isLoading } = useContractRead({
    address: '0x921fFD1C2471b153fbbF374E6887A662219b2dFC',
    abi: lottery.abi,
    functionName: 'betsOpen',
  });

  return (
    <Button
      height='40px'
      width='200px'
      border='2px solid green'
      color='green'
      mt='5'
      borderRadius='lg'
      onClick={() =>
        toast({
          title: `Checking if Bets are open from etherscan. Results : ${data}`,
          status: 'info',
          isClosable: true,
          containerStyle: {
            bg: 'blue',
            borderRadius: '2xl',
          },
        })
      }
    >
      Check Status
    </Button>
  );
};

export default ToastBetOpen;
