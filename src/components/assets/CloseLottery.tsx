import { useToast, Button } from '@chakra-ui/react';
import React from 'react';
import { usePrepareContractWrite, useContractWrite } from 'wagmi';
import lottery from '../../abi/Lottery.json';

const CloseLottery = () => {
  const toast = useToast();
  const { config } = usePrepareContractWrite({
    address: '0x921fFD1C2471b153fbbF374E6887A662219b2dFC',
    abi: lottery.abi,
    functionName: 'closeLottery',
  });
  const { write, error, isSuccess } = useContractWrite(config);

  return (
    <>
      <Button
        height='40px'
        width='200px'
        color='red'
        bg='gray.100'
        mt='5'
        borderRadius='lg'
        disabled={!write}
        onClick={() => write?.()}
      >
        Close Lottery
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
      {isSuccess &&
        (() =>
          toast({
            title: `Bets have been Close : ${isSuccess} 🚀`,
            status: 'info',
            isClosable: true,
            containerStyle: {
              bg: 'green',
              borderRadius: '2xl',
            },
          }))}
    </>
  );
};
export default CloseLottery;
