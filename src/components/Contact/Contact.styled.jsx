import styled from '@emotion/styled';

export const Button = styled.button`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.backgroundFirst};
  padding: ${p => p.theme.space[2]}px;
  margin: ${p => p.theme.space[2]}px;
  border-color: transparent;
  border-radius: ${p => p.theme.space[2]}px;
  border: ${p => p.theme.space[0]}px;
  width: auto;
`;
