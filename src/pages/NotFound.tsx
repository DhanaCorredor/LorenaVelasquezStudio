import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SignatureHeart } from '../components/SignatureHeart';
import { PageSeo } from '../components/PageSeo';

export default function NotFound() {
  return (
    <>
      <PageSeo title="Página no encontrada" />
      <section className="min-h-[80vh] flex items-center bg-white-pure">
        <div className="container-x text-center max-w-xl mx-auto py-20">
          <SignatureHeart className="w-12 h-12 text-pink-dark mx-auto mb-6" />
          <p className="eyebrow mb-4">404 · Página no encontrada</p>
          <h1 className="h-display text-4xl sm:text-5xl md:text-6xl mb-5 text-balance">
            Esta página se ha <span className="italic text-pink-dark">esfumado</span>.
          </h1>
          <p className="text-graphite mb-8">
            No hemos podido encontrar lo que buscabas, pero tu cita perfecta sigue esperándote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="btn-primary">
              Volver al inicio <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/servicios" className="btn-secondary">
              Ver servicios
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
