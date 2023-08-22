import { Route, Routes } from 'react-router-dom';
import {
  RootPath,
  SignInPagePath,
  SignUpPagePath,
  StoresPagePath,
} from './paths';
import React from 'react';
import RequireAuth from './RequireAuth';

const TopPage = React.lazy(() => import('pages/TopPage'));
const SignInPage = React.lazy(() => import('pages/SignInPage'));
const SignUpPage = React.lazy(() => import('pages/SignUpPage'));
const StoresPage = React.lazy(() => import('pages/StoresPage'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={RootPath} element={<TopPage />} />
      <Route path={SignInPagePath} element={<SignInPage />} />
      <Route path={SignUpPagePath} element={<SignUpPage />} />
      <Route path='/me' element={<RequireAuth />}>
        <Route path={StoresPagePath} element={<StoresPage />} />
      </Route>
    </Routes>
  );
}
