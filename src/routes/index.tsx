import { Route, Routes } from 'react-router-dom';
import { RootPath, SignInPagePath, SignUpPagePath } from './paths';
import React from 'react';

const SignInPage = React.lazy(() => import('pages/SignInPage'));
const SignUpPage = React.lazy(() => import('pages/SignUpPage'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={RootPath} element={<></>} />
      <Route path={SignInPagePath} element={<SignInPage />} />
      <Route path={SignUpPagePath} element={<SignUpPage />} />
    </Routes>
  );
}
