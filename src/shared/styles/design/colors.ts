import { shade } from 'polished';

import { type INewColors } from '../themes/theme.interfaces';

const colors: INewColors = {
  primary: '#80CAFF',
  accent: '#bb6bd9',
  hoverAccent: '#ffa00c10',
  background: '#F5F5F5',
  surface: '#FFFFFF',
  shadow: '#00000015',
  fullColor: '#000000',
  subColor: '#00000075',
  halfColor: '#00000050',
  helpColor: '#00000025',
  hoverColor: '#00000010',
  faintColor: '#00000003',
  info: '#1D89CC',
  success: '#00C07F',
  error: '#FF5248',
  warning: '#FCC325',
  accentText: '#fff',
  primaryText: '#fff',
  shadeSurface: shade(0.07, '#fff'),
  opaqueSurface: '#f5f5f5cc',
  contentLoaderBackground: shade(0.05, '#f5f5f5'),
  contentLoaderForeground: shade(0.03, '#f5f5f5'),
};

export default colors;
