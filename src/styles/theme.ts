import { DefaultTheme } from 'styled-components';

export enum ColorsEnum {
  primary = '#FF5208',
  secondary = '#FFBAAB',
  success = '#85B899',
  error = '#F5734D',
  sunshine = '#FFDA00',
  tangerine = '#FF5208',
  tangerine0 = '#DA4606',
  tangerine1 = '#FF6A2B',
  tangerine2 = '#FF834E',
  tangerine3 = '#FF9C71',
  tangerine4 = '#FFB495',
  tangerine5 = '#FFCDB8',
  salmon = '#F5734D',
  blush = '#FFBAAB',
  bone = '#FFEDDE',
  lavender = '#A37DFC',
  amethyst = '#6100FA',
  field = '#85B899',
  mint = '#85E8AD',
  azure = '#DBFAFA',
  gunmetal = '#333333',
  warmgray1 = '#55524F',
  warmgray2 = '#77716C',
  warmgray3 = '#999088',
  warmgray4 = '#BBAFA5',
  warmgray5 = '#DDCEC1',
  coolgray1 = '#4F5454',
  coolgray2 = '#6B7575',
  coolgray3 = '#879696',
  coolgray4 = '#A3B7B7',
  coolgray5 = '#BFD8D8',
  white = '#FFFFFF',
}

export type ColorsType = keyof typeof ColorsEnum;

const theme: DefaultTheme = {
  colors: ColorsEnum,
};

export default theme;
