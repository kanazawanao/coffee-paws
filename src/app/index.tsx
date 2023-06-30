import Header from 'components/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from 'routes';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}
