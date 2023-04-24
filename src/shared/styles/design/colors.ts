import { shade } from 'polished';

import { type INewColors } from '../themes/theme.interfaces';

const colors: INewColors = {
  // VISUAL IDENTITY-These are dynamic the colors
  primary: '#811b39',
  accent: '#ffa00c',
  hoverAccent: '#ffa00c10',

  // THEMES-These colors change according to the theme
  background: '#F5F5F5',
  surface: '#FFFFFF',
  shadow: '#00000015',
  fullColor: '#000000', // strong
  subColor: '#00000075', // normal
  halfColor: '#00000050', // opaque
  helpColor: '#00000025', // almostSmoked
  hoverColor: '#00000010', // hover
  faintColor: '#00000003',

  // FEEDBACK
  info: '#1D89CC',
  success: '#00C07F', // greenCorrect, online
  error: '#FF5248', // redWrong, busy
  warning: '#FCC325', // yellowWarning

  // Dinamic theme colors
  accentText: '#fff',
  primaryText: '#fff',
  shadeSurface: shade(0.07, '#fff'),
  opaqueSurface: '#f5f5f5cc',
  contentLoaderBackground: shade(0.05, '#f5f5f5'),
  contentLoaderForeground: shade(0.03, '#f5f5f5'),
};

export default colors;
