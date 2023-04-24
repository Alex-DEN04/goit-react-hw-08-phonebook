import styled from '@emotion/styled';

export const Item = styled.li`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.black};
  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;
  list-style-type: none;
`;
