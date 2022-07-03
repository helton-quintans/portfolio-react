import * as React from 'react';

import Seo from '@/components/Seo';;
import Layout from '@/components/layout/Layout';
import ProfileSection from '@/components/ProfileSection/ProfileSection';
import Videocard from '@/components/VideoCard/Videocard';
import TechSection from '@/components/TechsSection/TechSection';
import CardProject from '@/components/ProjectsSection/Projects';
import { BiDonateHeart } from 'react-icons/bi'

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

//   -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' description='Personal projects portfolio from Helto Quintãns' />
      <main className='bg-black'>
        <div className=' '>
          <h1 className='shadow-md shadow-primary-900 bg-gradient-to-r from-purple-500 py-4 text-center text-3xl text-neutral-100 '>
            👋 Hi! You can call me
            <span className='ml-2 text-center text-4xl underline decoration-fuchsia-500 underline-offset-8 transition-colors'>
              Helton.
            </span>
          </h1>
        </div>
        <ProfileSection />

        <section className='px-8 flex flex-col items-center justify-center bg-black'>
          <h1 className='text-4xl text-white mt-md underline decoration-fuchsia-500 underline-offset-8 transition-colors text-center '>
            In love with javascript <span>💛</span>
          </h1>
          <p className=' text-lg py-8 max-w-md px-6 text-center text-slate-200'>
            I make videos to teach people how to rebuild and redefine fundamental programming concepts.
            <br />
            <p className='mt-2 flex text-center items-center justify-center'>

              <BiDonateHeart size={40} />
            </p>
          </p>
          <Videocard />
        </section>

        <TechSection />

        <div className='px-8 sm:md:xl:lg:px-16 pt-10 text-center text-slate-200 '>
          <h1 className=' text-4xl pb-8 underline decoration-fuchsia-500 underline-offset-8 transition-colors '>
            Projects
          </h1>
          <CardProject />
        </div>
      </main>
    </Layout>
  );
}
