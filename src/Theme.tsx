import baseStyled, {ReactNativeStyledInterface} from 'styled-components/native';

export const theme = {
  colors: {
    white: '#FFF',
    caption: '#BCCCD4',
    gray: '#888888',

    black: '#1a1917',

    active: '#007BFA',

    primary: '#c42f33',
    primaryLight: '#CF585B',
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ReactNativeStyledInterface<Theme>;
