import { type IShadows } from '../themes/theme.interfaces';
import colors from './colors';

const shadows: IShadows = {
  default: `0 3px 6px ${colors.shadow}`,
  blurred: `0 0px 6px ${colors.shadow}75`,
};

export default shadows;
