import avatars from '../design/avatars';
import colors from '../design/colors';
import iconographies from '../design/iconographies';
import shadows from '../design/shadows';
import { spacings } from '../design/spacings';
import typographies from '../design/typographies';
import { type ITheme } from './theme.interfaces';

const ligthTheme: ITheme = {
  colors: {
    ...colors,
    strong: '#000',
    normal: '#000000CC',
    opaque: '#00000080',
    smoked: '#0000004D',
    almostSmoked: '#00000020',
    hover: '#0000000D',
    shadow: '#00000033',
    greenCorrect: '#7AC051',
    yellowWarning: '#ffcc00',
    redWrong: '#DD4848',
    online: '#16D900',
    offline: '#AAAAAA',
    busy: '#F44D4D',
    gray: '#AAAAAA',
  },
  header: {
    background: '#80CAFF',
    text: '#fff',
  },
  shadows,
  typographies,
  iconographies,
  spacings,
  avatars,
};

export default ligthTheme;
