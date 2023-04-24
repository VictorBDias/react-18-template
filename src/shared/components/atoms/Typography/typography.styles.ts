import styled, { css, type DefaultTheme } from 'styled-components';

import { type TypographyProps } from './typography.interfaces';

type Theme = TypographyProps & { theme: DefaultTheme };

export const Paragraph = styled.p<Theme>`
  margin: 0;
  color: ${props => props.color} !important;

  ${props => {
    if (props.isPreLine)
      return css`
        white-space: pre-line;
      `;
  }}
  ${props => {
    if (props.maxLines)
      return css`
        word-break: break-word;

        @supports (-webkit-line-clamp: ${props.maxLines}) {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: initial;
          display: -webkit-box;
          -webkit-line-clamp: ${props.maxLines};
          -webkit-box-orient: vertical;
        }
      `;
  }}
    &.hoverable {
    &:hover {
      text-decoration: underline;
    }
  }

  &.wordBreak {
    word-break: break-all;
  }

  &.italic {
    font-style: italic;
  }

  &.capitalize {
    text-transform: capitalize;
  }

  &.centered {
    text-align: center;
  }

  &.left {
    text-align: left;
  }

  &.uppercase {
    text-transform: uppercase;
  }

  ${props => {
    const { variant, theme } = props;
    switch (variant) {
      case 'title':
        return css`
          font-family: ${theme.typographies.title.family};
          font-size: ${theme.typographies.title.size};
          color: ${theme.colors.fullColor};
          font-weight: ${theme.typographies.title.weight};
        `;

      case 'accentTitle':
        return css`
          font-family: ${theme.typographies.accentTitle.family};
          font-size: ${theme.typographies.accentTitle.size};
          color: ${theme.colors.accent};
          font-weight: ${theme.typographies.accentTitle.weight};
        `;

      case 'subTitle':
        return css`
          font-family: ${theme.typographies.subTitle.family};
          font-size: ${theme.typographies.subTitle.size};
          color: ${theme.colors.fullColor};
          font-weight: ${theme.typographies.subTitle.weight};
        `;

      case 'accentSubTitle':
        return css`
          font-family: ${theme.typographies.accentSubTitle.family};
          font-size: ${theme.typographies.accentSubTitle.size};
          color: ${theme.colors.accent};
          font-weight: ${theme.typographies.accentSubTitle.weight};
        `;

      case 'boldRegular':
        return css`
          font-family: ${theme.typographies.boldRegular.family};
          font-size: ${theme.typographies.boldRegular.size};
          color: ${theme.colors.fullColor};
          font-weight: ${theme.typographies.boldRegular.weight};
        `;
      case 'accentRegular':
        return css`
          font-family: ${theme.typographies.accentRegular.family};
          font-size: ${theme.typographies.accentRegular.size};
          color: ${theme.colors.accent};
          font-weight: ${theme.typographies.accentRegular.weight};
        `;

      case 'halfRegular':
        return css`
          font-family: ${theme.typographies.halfRegular.family};
          font-size: ${theme.typographies.halfRegular.size};
          color: ${theme.colors.halfColor};
          font-weight: ${theme.typographies.halfRegular.weight};
        `;
      case 'description':
        return css`
          font-family: ${theme.typographies.description.family};
          font-size: ${theme.typographies.description.size};
          color: ${theme.colors.subColor};
          font-weight: ${theme.typographies.description.weight};
        `;
      case 'accentDescription':
        return css`
          font-family: ${theme.typographies.accentDescription.family};
          font-size: ${theme.typographies.accentDescription.size};
          color: ${theme.colors.accent};
          font-weight: ${theme.typographies.accentDescription.weight};
        `;
      case 'boldDescription':
        return css`
          font-family: ${theme.typographies.boldDescription.family};
          font-size: ${theme.typographies.boldDescription.size};
          color: ${theme.colors.subColor};
          font-weight: ${theme.typographies.boldDescription.weight};
        `;
      case 'halfDescription':
        return css`
          font-family: ${theme.typographies.halfDescription.family};
          font-size: ${theme.typographies.halfDescription.size};
          color: ${theme.colors.halfColor};
          font-weight: ${theme.typographies.halfDescription.weight};
        `;

      case 'label':
        return css`
          font-family: ${theme.typographies.label.family};
          font-size: ${theme.typographies.label.size};
          color: ${theme.colors.subColor};
          font-weight: ${theme.typographies.label.weight};
          text-transform: ${theme.typographies.label.transform};
        `;

      case 'whiteLabel':
        return css`
          font-family: ${theme.typographies.whiteLabel.family};
          font-size: ${theme.typographies.whiteLabel.size};
          color: #fff;
          font-weight: ${theme.typographies.whiteLabel.weight};
          text-transform: ${theme.typographies.whiteLabel.transform};
        `;

      case 'tag':
        return css`
          font-family: ${theme.typographies.tag.family};
          font-size: ${theme.typographies.tag.size};
          color: #fff;
          font-weight: ${theme.typographies.tag.weight};
        `;
      case 'accentTag':
        return css`
          font-family: ${theme.typographies.accentTag.family};
          font-size: ${theme.typographies.accentTag.size};
          color: ${theme.colors.accent};
          font-weight: ${theme.typographies.accentTag.weight};
        `;

      case 'errorSubTitle':
        return css`
          font-family: ${theme.typographies.subTitle.family};
          font-size: ${theme.typographies.subTitle.size};
          color: ${theme.colors.error};
          font-weight: ${theme.typographies.subTitle.weight};
        `;

      case 'black':
        return css`
          color: #000;
        `;

      default:
        return css`
          font-family: ${theme.typographies.regular.family};
          font-size: ${theme.typographies.regular.size};
          color: ${theme.colors.fullColor};
          font-weight: ${theme.typographies.regular.weight};
        `;
    }
  }}
`;
