import ArrowLink from '@/components/links/ArrowLink';
import NextImage from '@/components/NextImage';

export default function ProfileSection() {
  return (
    <div className='h-screen sm:px-6 md:px-6 lg:px-6 xl:px-6'>
      <h1 className=' py-4 text-center text-3xl text-neutral-100 sm:pt-8 md:pt-8 lg:pt-8 xl:pt-8'>
        👋 Hi! You can call me
        <span className='ml-2 text-center text-4xl underline decoration-fuchsia-500 underline-offset-8 transition-colors'>
          Helton
        </span>
      </h1>
      <div className='grid-cols-2 items-center justify-center sm:py-24 md:flex md:py-24 lg:py-24 xl:py-24 '>
        <div className='max-w-md pb-1 duration-700 hover:scale-110'>
          <NextImage
            useSkeleton
            className='mx-auto rounded-full border-4 border-primary-400 '
            src='/images/Me.png'
            width='120'
            height='120'
            alt='photo'
          />
          <p className='pt-2 text-center text-xl text-fuchsia-400'>
            Frontend web developer
          </p>
          <p className='max-w-md px-8 text-center text-slate-200'>
            I work with React Ecosystem and make videos to teach people how to
            rebuild and redefine fundamental programming concepts.
            <br />
            <ArrowLink
              className='justify-center pt-2 text-xl text-primary-500'
              href='https://github.com/helton-quintans'
              openNewTab={true}
            >
              👨‍🚀 Github
            </ArrowLink>
          </p>
        </div>
        <div className='px-8 shadow-xl shadow-primary-900'>
          <video
            style={{ width: '460px', height: '280px' }}
            muted
            loop
            poster='/images/thumb.png'
            src='/videos/reduce01-highlight.mp4'
            controls
          ></video>
        </div>
      </div>
    </div>
  );
}
