"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';


// Definisikan tipe untuk item
interface MenuItem {
    title: string;
    path: string;
    icon: ReactNode;
  }
  
  interface MenuLinkProps {
    item: MenuItem;
  }
const MenuLink: React.FC<MenuLinkProps> = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`p-5 flex items-center gap-2 my-1 rounded-lg ${
        pathname === item.path ? 'bg-gray-700' : 'hover:bg-gray-700'
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
