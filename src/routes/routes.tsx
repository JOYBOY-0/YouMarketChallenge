import { Auth } from "../views/auth";
import {RouteObject} from 'react-router'
import { Confirmation } from "../views/confirmation";
import AuthGuard from "./guard";
import { Home } from "../views/home";
import { AddFounds } from "../views/addFounds";

export const PRIVATE: Record<string, RouteObject> = {
  HOME: {
    path: '/home',
    element: <Home />,
  },
  ADD: {
    path: '/add',
    element: <AddFounds />,
  },
}

export const ROUTES: Record<string, RouteObject> = {
  AUTH: {
    path: '/',
    element: <Auth />,
  },
  CONFIRMATION: {
    path: '/confirmation',
    element: <Confirmation />,
  },
  PRIVATE: {
      element: <AuthGuard />,
      children: Object.values(PRIVATE),
  }
}