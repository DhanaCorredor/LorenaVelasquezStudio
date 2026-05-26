import { useEffect } from 'react';

type Props = {
  /** Page title (appended to brand) */
  title: string;
  /** Meta description override */
  description?: string;
};

const BRAND = 'Lorena Velásquez Studio';
const DEFAULT_DESCRIPTION =
  'Estudio premium de manicura y pedicura en Moratalaz, Madrid. Cuidado integral con atención personalizada. Reserva tu cita.';

/**
 * Lightweight per-page SEO: sets document.title and meta description on mount.
 * Doesn't require react-helmet — minimal overhead.
 */
export function PageSeo({ title, description }: Props) {
  useEffect(() => {
    document.title = `${title} · ${BRAND}`;

    const desc = description ?? DEFAULT_DESCRIPTION;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', desc);

    // OG title + desc — keep social previews aligned
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [key, val] = selector.match(/\[(\w+)="([^"]+)"\]/)?.slice(1) ?? [];
        if (key && val) el.setAttribute(key, val);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[property="og:title"]', 'content', `${title} · ${BRAND}`);
    setMeta('meta[property="og:description"]', 'content', desc);
    setMeta('meta[name="twitter:title"]', 'content', `${title} · ${BRAND}`);
    setMeta('meta[name="twitter:description"]', 'content', desc);
  }, [title, description]);

  return null;
}
