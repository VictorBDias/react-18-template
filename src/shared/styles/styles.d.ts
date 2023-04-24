import 'styled-components';
import { type ITheme } from './themes/theme.interfaces';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
