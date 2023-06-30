import Header from 'components/Header';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from 'routes';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}
