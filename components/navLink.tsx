'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinkProps {
  url: string;
  title: string;
}

interface NavLinkProps {
  link: LinkProps;
}

const NavLink = ({ link }: NavLinkProps) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded p-1 ${
        pathName === link.url && 'bg-black text-white'
      }`}
      href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;
