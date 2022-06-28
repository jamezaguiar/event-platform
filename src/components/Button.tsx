import { MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
  variant: 'primary' | 'secondary';
  children: ReactNode;
  link?: string | null;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const primaryClasses =
  'p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors';
const secondaryClasses =
  'p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors';

export function Button({
  variant,
  children,
  link = null,
  onClick,
}: ButtonProps) {
  const className = variant === 'primary' ? primaryClasses : secondaryClasses;

  return link ? (
    <a href={link} className={className}>
      {children}
    </a>
  ) : (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
