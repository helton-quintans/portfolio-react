import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
  { href: '#budget', label: 'Budget' },
];

export default function Header() {
  return (
    <header className=' sticky top-0 z-50 h-16  bg-gradient-to-r from-black to-slate-900 '>
      <div className='h-2 bg-gradient-to-tr from-primary-100 via-primary-500 to-primary-900'></div>
      <div className='layout flex h-16 items-center justify-between'>
        <UnstyledLink
          href='#home'
          className='-rotate-[17deg] animate-pulse rounded-md text-4xl font-bold text-primary-400 hover:text-violet-500 sm:transform-none md:transform-none lg:transform-none xl:transform-none 2xl:transform-none'
        >
          hq
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li
                className='-rotate-[17deg] animate-pulse rounded transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-purple-500 sm:transform-none md:transform-none lg:transform-none xl:transform-none 2xl:transform-none'
                key={`${href}${label}`}
              >
                <UnstyledLink
                  href={href}
                  className='text-primary-400 transition delay-150 ease-in-out  hover:text-white sm:text-sm xl:text-lg'
                >
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
