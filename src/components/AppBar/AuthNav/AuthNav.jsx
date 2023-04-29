import { AuthNavMenu } from './AuthNavStyled';

export const AuthNav = () => {
  return (
    <div>
      <AuthNavMenu to="register">Register</AuthNavMenu>
      <AuthNavMenu to="login">Login</AuthNavMenu>
    </div>
  );
};
