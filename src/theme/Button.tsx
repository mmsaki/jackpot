import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    variants: {
      rounded: {
        width: '100px',
        height: '40px',
        border: '2px solid #d2d2d4',
        color: '#666769',
      },
    },
  },
});
