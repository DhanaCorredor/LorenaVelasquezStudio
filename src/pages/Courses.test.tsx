import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Courses from './Courses';

const renderCourses = () =>
  render(
    <MemoryRouter>
      <Courses />
    </MemoryRouter>
  );

afterEach(() => {
  vi.restoreAllMocks();
});

describe('<Courses /> waitlist form', () => {
  it('opens WhatsApp with the prefilled lead and shows the success state', async () => {
    const openSpy = vi.spyOn(window, 'open').mockReturnValue(null);
    const user = userEvent.setup();
    renderCourses();

    await user.type(screen.getByLabelText('Tu nombre'), 'Ana');
    await user.type(screen.getByLabelText('Email'), 'ana@test.com');
    await user.click(screen.getByRole('button', { name: /apuntarme a la lista/i }));

    expect(openSpy).toHaveBeenCalledTimes(1);
    const url = openSpy.mock.calls[0][0] as string;
    expect(url).toContain('wa.me/34722196599');
    expect(url).toContain('Ana');
    expect(url).toContain(encodeURIComponent('ana@test.com'));

    expect(screen.getByText(/solo falta un paso/i)).toBeInTheDocument();
  });

  it('does not submit when fields are empty', async () => {
    const openSpy = vi.spyOn(window, 'open').mockReturnValue(null);
    const user = userEvent.setup();
    renderCourses();

    await user.click(screen.getByRole('button', { name: /apuntarme a la lista/i }));

    expect(openSpy).not.toHaveBeenCalled();
  });
});
