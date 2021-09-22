import { extendTheme } from '@chakra-ui/react';

export const generalTheme = extendTheme({
  styles: {
    global: {
      body: {
        // bg: '#171b26',
        bg: '#000000',
        fontFamily: 'Roboto',
        textAlign: 'center',
      },
      Table: {
        color: '#E5E5E5',
      },
    },
  },
});
