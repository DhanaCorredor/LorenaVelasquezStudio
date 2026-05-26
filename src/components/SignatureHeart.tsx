type Props = { className?: string };

export function SignatureHeart({ className = 'w-6 h-6' }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 21s-7.5-4.5-9.5-9.5C1 7.5 3.5 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 3.5 0 6 3.5 4.5 7.5C19.5 16.5 12 21 12 21z" />
    </svg>
  );
}
