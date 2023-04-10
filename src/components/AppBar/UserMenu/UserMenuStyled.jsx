import styled from '@emotion/styled';
// import { Button } from 'components/Contact/Contact.styled';
// import { NavLink } from 'react-router-dom'

export const Button = styled.button`
  /* display: flex; */
  /* align-items: center; */
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  padding: ${p => p.theme.space[2]}px;
  margin: ${p => p.theme.space[0]}px;
  margin-right: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
`;
export const Email = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.black};
  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;
  margin-right: ${p => p.theme.space[4]}px;
`;
