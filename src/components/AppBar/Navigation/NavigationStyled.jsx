import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavMenu = styled(NavLink)`
  font-family: ${p => p.theme.fonts.body};
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.black};
  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;
  margin-right: ${p => p.theme.space[4]}px;
  &.active {
    color: ${p => p.theme.colors.accent};
  }
`;

// export const Input = styled.input`
//   font-family: ${p => p.theme.fonts.body};
//   font-size: ${p => p.theme.fontSizes.m};
//   font-weight: ${p => p.theme.fontWeights.normal};
//   line-height: ${p => p.theme.lineHeights.body};
//   color: ${p => p.theme.colors.black};
//   padding: ${p => p.theme.space[0]}px;
//   margin: ${p => p.theme.space[0]}px;
// `;
