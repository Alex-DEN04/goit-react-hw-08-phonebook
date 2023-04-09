import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { Route, redirect } from "react-router-dom"
import { getIsLoggedIn } from 'redux/selectors';

export default function RestrictedRoute({ component, redirectTo = '/' }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log(Navigate.to);
  return isLoggedIn ? <Navigate to={redirectTo} replace /> : component;
}

// import { useSelector } from 'react-redux';
// import { Route, redirect } from 'react-router-dom';
// import { getIsLoggedIn } from "redux/selectors"

// /**
//  * 1. Он должен повторять API Route
//  *  2. Он должен рендерить Route
//  * - Если маршрут приватный и пользователь залогинен, рендерит компонент
//  * - В противном случае рендерит Redirect на redirectTo
//  */

// export default function PrivateRoute({
//   children,
//   redirectTo = '/',
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(getIsLoggedIn);
//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : redirect(redirectTo)}
//     </Route>
//   );
// }
