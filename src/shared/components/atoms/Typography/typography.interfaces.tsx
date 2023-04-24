import { type ReactNode, type TextareaHTMLAttributes } from 'react';

import { type ITypographies } from '../../../styles/themes/theme.interfaces';

export type TypographyVariants = keyof ITypographies;

export interface TypographyProps
  extends TextareaHTMLAttributes<HTMLParagraphElement> {
  children: ReactNode | string | number;
  variant?: TypographyVariants;
  maxLines?: number;
  className?: string;
  isPreLine?: boolean;
  color?: string;
}
