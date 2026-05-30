import { describe, it, expect } from 'vitest';
import { SERVICE_CATEGORIES, HOME_PREVIEW_SLUGS, FAQS } from './data';

const allServices = SERVICE_CATEGORIES.flatMap((c) => c.items);

describe('catalog data', () => {
  it('every home preview slug resolves to a real service', () => {
    for (const slug of HOME_PREVIEW_SLUGS) {
      const match = allServices.find((s) => s.title === slug);
      expect(match, `slug "${slug}" not found in catalog`).toBeDefined();
    }
  });

  it('every service has a title, price and duration', () => {
    for (const service of allServices) {
      expect(service.title).toBeTruthy();
      expect(service.price).toMatch(/\d/);
      expect(service.duration).toBeTruthy();
    }
  });

  it('category ids are unique', () => {
    const ids = SERVICE_CATEGORIES.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every FAQ has a question and an answer', () => {
    expect(FAQS.length).toBeGreaterThan(0);
    for (const faq of FAQS) {
      expect(faq.q).toBeTruthy();
      expect(faq.a).toBeTruthy();
    }
  });
});
