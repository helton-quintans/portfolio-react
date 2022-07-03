import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiReact } from 'react-icons/si';

export default function ProfileSection() {
  return (
    <>
      <section className='flex flex-col sm:py-20 md:py-10 lg:py-10 xl:py-10 flex items-center justify-center bg-black py-6'>
        <div className=' items-center max-w-md duration-700 hover:scale-110'>
          <NextImage
            useSkeleton={true}
            className='mx-auto rounded-full border-4 border-primary-400 '
            src='/images/Me.png'
            width='120'
            height='120'
            alt='photo'
          />
          <p className='pt-2 text-center text-3xl text-fuchsia-400'>
            Fullstack web developer
          </p>
          <p className='text-lg max-w-md py-4 px-6 text-center text-slate-200'>
            👨‍🚀 I work with React Ecosystem.
            <br />
          </p>
        </div>
        <Button variant='outline' className='animate-pulse mt-2 justify-center px-40 text-xl text-primary-500'>
          <FaGithub />
        </Button>

        <Button variant='outline' className='animate-pulse mt-2 justify-center px-40 text-xl text-primary-500'>
          <FaLinkedin />

        </Button>
        <Button variant='outline' className='animate-pulse mt-2 justify-center px-40 text-xl text-primary-500'>
          <FaYoutube />

        </Button>
        <Button variant='outline' className='animate-pulse mt-2 justify-center px-40 text-xl text-primary-500'>
          <FaInstagram />
        </Button>
      </section >
    </>
  );
}
