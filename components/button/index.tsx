import { ReactElement, ReactNode } from 'react';

interface IBtnProps {
  children: ReactNode;
  type?: string;
}

export default function Button(): ReactElement {
  return (
    <button type="button" className="text-[#1C6758]">
      Sign Up
    </button>
  );
}
