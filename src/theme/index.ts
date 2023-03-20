// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'normal',
        fontSize: 'md',
      },
      variants: {
        rounded: { borderRadius: '30px' },
      },
      defaultProps: {
        fontSize: 'lg',
        size: 'lg',
        variant: 'rounded',
        colorScheme: 'green',
      },
    },
    Link: {
      color: '#0f5ccf',
      _hover: {
        textDecoration: 'underline',
      },
    },
  },
  styles: {
    global: {
      a: {
        color: '#0f5ccf',
      },
    },
  },
});

export default theme;
