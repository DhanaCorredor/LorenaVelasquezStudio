import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';

// Home loads eagerly (it's the landing + LCP). Secondary routes split out.
const Services = lazy(() => import('./pages/Services'));
const Courses = lazy(() => import('./pages/Courses'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/cursos" element={<Courses />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
