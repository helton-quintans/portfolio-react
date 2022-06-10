import * as React from 'react';

import CardProject from '@/components/CardProject/CardProject';
import Layout from '@/components/layout/Layout';
import ProfileSection from '@/components/ProfileSection/ProfileSection';
import Seo from '@/components/Seo';
import TechStack from '@/components/TechsSection/TechStack';

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
      <Seo templateTitle='Home' description='Personal projects portfolio' />
      <main>
        <ProfileSection />
        <div className=' px-8 pb-8 text-center text-slate-200 '>
          <h1 className=' text-4xl underline decoration-fuchsia-500 underline-offset-8 transition-colors '>
            Techs
          </h1>
          <p className='py-6'>Main technologies I work currently.</p>
          <TechStack />
        </div>
        <div className=' px-8 text-center text-slate-200 '>
          <h1 className=' text-4xl underline decoration-fuchsia-500 underline-offset-8 transition-colors '>
            Projects
          </h1>
          <CardProject />
        </div>
      </main>
    </Layout>
  );
}
