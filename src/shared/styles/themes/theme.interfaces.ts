export interface INewColors {
  primary: string;
  accent: string;
  hoverAccent: string;

  background: string;
  surface: string;
  shadow: string;

  fullColor: string;
  subColor: string;
  halfColor: string;
  helpColor: string;
  hoverColor: string;
  faintColor: string;

  info: string;
  success: string;
  error: string;
  warning: string;

  accentText: string;
  primaryText: string;
  shadeSurface: string;
  opaqueSurface: string;
  contentLoaderBackground: string;
  contentLoaderForeground: string;
}

export interface ILegacyColors {
  strong: string;
  normal: string;
  opaque: string;
  smoked: string;
  almostSmoked: string;
  hover: string;
  shadow: string;
  greenCorrect: string;
  yellowWarning: string;
  redWrong: string;
  online: string;
  offline: string;
  busy: string;
  gray: string;
}

export interface IHeader {
  background: string;
  text: string;
}

export interface IShadows {
  default: string;
  blurred: string;
}

interface Typography {
  size: string;
  weight: string;
  family: string;
  transform?: string;
  color?: string;
}

interface Avatar {
  size: string;
  borderRadius: string;
}

interface Icon {
  size: string;
}

export interface Spacing {
  huge: string | number;
  big: string | number;
  regular: string | number;
  tiny: string | number;
  small: string | number;
}

export interface IColors extends INewColors, ILegacyColors {}
export interface ITypographies {
  title: Typography;
  subTitle: Typography;
  regular: Typography;
  accentTitle: Typography;
  boldRegular: Typography;
  accentSubTitle: Typography;
  accentRegular: Typography;
  halfRegular: Typography;
  description: Typography;
  accentDescription: Typography;
  boldDescription: Typography;
  halfDescription: Typography;
  label: Typography;
  whiteLabel: Typography;
  tag: Typography;
  accentTag: Typography;
  errorSubTitle?: Typography;
  black?: Typography;
  tab?: Typography;
}

export interface IIconographies {
  big: Icon;
  primaryBig: Icon;
  accentBig: Icon;
  primaryRegular: Icon;
  accentRegular: Icon;
  halfColorRegular: Icon;
  primarySmall: Icon;
  accentSmall: Icon;
  halfColorSmall: Icon;
  primaryTiny: Icon;
  accentTiny: Icon;
  halfColorTiny: Icon;
}

export interface ISpacings {
  margins: Spacing;
  paddings: Spacing;
}

export interface IAvatars {
  huge: Avatar;
  big: Avatar;
  regular: Avatar;
  small: Avatar;
  tiny: Avatar;
}

export interface ITheme {
  colors: IColors;
  typographies: ITypographies;
  iconographies: IIconographies;
  header: IHeader;
  shadows: IShadows;
  spacings: ISpacings;
  avatars: IAvatars;
}
