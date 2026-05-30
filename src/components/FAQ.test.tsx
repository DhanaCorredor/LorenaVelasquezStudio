import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FAQ } from './FAQ';
import { FAQS } from '../data';

const buttonFor = (question: string) =>
  screen.getByText(question).closest('button') as HTMLButtonElement;

describe('<FAQ />', () => {
  it('renders every question', () => {
    render(<FAQ />);
    for (const faq of FAQS) {
      expect(screen.getByText(faq.q)).toBeInTheDocument();
    }
  });

  it('opens the first question by default', () => {
    render(<FAQ />);
    expect(buttonFor(FAQS[0].q)).toHaveAttribute('aria-expanded', 'true');
    expect(buttonFor(FAQS[1].q)).toHaveAttribute('aria-expanded', 'false');
  });

  it('switches the open question when another is clicked', async () => {
    const user = userEvent.setup();
    render(<FAQ />);

    await user.click(buttonFor(FAQS[1].q));

    expect(buttonFor(FAQS[1].q)).toHaveAttribute('aria-expanded', 'true');
    expect(buttonFor(FAQS[0].q)).toHaveAttribute('aria-expanded', 'false');
  });

  it('collapses an open question when clicked again', async () => {
    const user = userEvent.setup();
    render(<FAQ />);

    await user.click(buttonFor(FAQS[0].q));

    expect(buttonFor(FAQS[0].q)).toHaveAttribute('aria-expanded', 'false');
  });
});
