import { describe, it, expect } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PageSeo } from './PageSeo';

const renderAt = (path: string, props: { title: string; description?: string }) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <PageSeo {...props} />
    </MemoryRouter>
  );

describe('<PageSeo />', () => {
  it('sets the document title with the brand suffix', async () => {
    renderAt('/servicios', { title: 'Servicios' });
    await waitFor(() =>
      expect(document.title).toBe('Servicios · Lorena Velásquez Studio')
    );
  });

  it('writes the meta description when provided', async () => {
    renderAt('/cursos', { title: 'Cursos', description: 'Texto de prueba' });
    await waitFor(() => {
      const meta = document.querySelector('meta[name="description"]');
      expect(meta?.getAttribute('content')).toBe('Texto de prueba');
    });
  });

  it('sets a canonical link for the current route', async () => {
    renderAt('/servicios', { title: 'Servicios' });
    await waitFor(() => {
      const canonical = document.querySelector('link[rel="canonical"]');
      expect(canonical?.getAttribute('href')).toBe(
        'https://lorena-velasquez-studio.vercel.app/servicios'
      );
    });
  });
});
