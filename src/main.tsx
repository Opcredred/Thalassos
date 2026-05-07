import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { PageTransition } from './components/ui/page-transition';
import App from './App.tsx';
import About from './pages/About.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageTransition><App /></PageTransition>,
  },
  {
    path: "/about",
    element: <PageTransition><About /></PageTransition>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactLenis root options={{ 
      lerp: 0.085, 
      duration: 1.1, 
      smoothWheel: true, 
      wheelMultiplier: 0.9, 
      touchMultiplier: 1.4 
    }}>
      <RouterProvider router={router} />
    </ReactLenis>
  </StrictMode>
);
