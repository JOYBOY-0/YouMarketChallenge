import { Navigate, Outlet } from 'react-router-dom'

export default function AuthGuard({
  children,
}: {
  children?: JSX.Element
}): JSX.Element {
  const user = 1
  if (user === null) return <Navigate to="/" />
  else return <Outlet />
}
