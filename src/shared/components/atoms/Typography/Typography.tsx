import { type TypographyProps } from './typography.interfaces';
import { Paragraph } from './typography.styles';

export const Typography = ({
  variant = 'regular',
  children,
  maxLines,
  className,
  isPreLine,
  color,
  ...rest
}: TypographyProps) => {
  return (
    <Paragraph
      variant={variant}
      maxLines={maxLines}
      className={className}
      isPreLine={isPreLine}
      color={color}
      {...rest}
    >
      {children}
    </Paragraph>
  );
};
