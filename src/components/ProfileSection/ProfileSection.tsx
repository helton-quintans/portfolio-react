import ArrowLink from '@/components/links/ArrowLink';
import NextImage from '@/components/NextImage';

export default function ProfileSection() {
  return (
    <div className='h-screen px-6'>
      <h1 className='pt-4 text-center text-3xl text-neutral-100'>
        👨‍🚀 Hi! You can call me
        <span className='ml-2 text-center text-4xl underline decoration-violet-900 underline-offset-8 transition-colors'>
          Helton
        </span>
      </h1>
      <div className='grid-cols-2 justify-center pt-8 md:flex '>
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
              className='h-8 w-16 text-primary-500'
              href='https://github.com/helton-quintans'
              width='80px'
              height='10px'
              openNewTab={true}
            >
              Github
            </ArrowLink>
          </p>
        </div>
        <div className='shadow-xl shadow-primary-900'>
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
