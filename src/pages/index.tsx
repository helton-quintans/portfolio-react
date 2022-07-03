import * as React from 'react';

import CardProject from '@/components/CardProject/CardProject';
import Layout from '@/components/layout/Layout';
import ProfileSection from '@/components/ProfileSection/ProfileSection';
import Seo from '@/components/Seo';
import TechStack from '@/components/TechsSection/TechStack';
import Videocard from '@/components/VideoCard/Videocard';
import { FaCss3, FaGithub, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import TechSection from '@/components/TechsSection/TechSection';

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
          </p>
          <Videocard />
        </section>

        <TechSection />

        {/* <section className=' px-8 '>
          <div className='animate-pulse items-center flex grid grid-cols-2'>
            <div className='flex flex-col justify-center text-purple-500'>
              <FaReact size={65} />
              <p className=''>React</p>
            </div>
            <div className='text-purple-500'>
              <SiTypescript size={65} />
              <p className='mr-3'>Typescript</p>
            </div>
            <div className='text-purple-500'>
              <SiJavascript size={65} />
            </div>
            <div className='text-purple-500'>
              <FaNodeJs size={65} />
            </div>
            <div className='text-purple-500'>
              <FaHtml5 size={65} />
            </div>
            <div className='text-purple-500'>
              <FaCss3 size={65} />
            </div>
            <div className='text-purple-500'>
              <FaGithub size={65} />
            </div>
            <div className='text-purple-500'>
              <FaHtml5 size={65} />

          </div>
          <TechStack />
        </section> */}
        <div className='px-8 pt-12 text-center text-slate-200 '>
          <h1 className=' text-4xl underline decoration-fuchsia-500 underline-offset-8 transition-colors '>
            Projects
          </h1>
          <CardProject />
        </div>
      </main>
    </Layout>
  );
}
