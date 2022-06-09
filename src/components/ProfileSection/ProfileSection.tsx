import NextImage from '@/components/NextImage';

export default function ProfileSection() {
  return (
    <section className='h-screen bg-gradient-to-r from-black to-slate-900 sm:bg-violet-200 md:bg-violet-400 lg:bg-violet-700 xl:bg-gradient-to-r'>
      <h1 className='pt-4 text-center text-3xl text-neutral-100'>
        👨‍🚀 Hi! You can call me
        <span className='ml-2 text-center text-4xl underline decoration-violet-900 underline-offset-8 transition-colors'>
          Helton
        </span>
      </h1>
      <div className='grid-cols-2 justify-center pt-8 md:flex '>
        <div className='max-w-md pb-4 duration-700 hover:scale-110'>
          <NextImage
            useSkeleton
            className='mx-auto rounded-full border-4 border-primary-400 '
            src='/images/Me.png'
            width='120'
            height='120'
            alt='photo'
          />
          <p className='pt-2 text-center text-xl text-violet-700'>
            Frontend web developer
          </p>
          <p className='max-w-md px-24 text-center text-slate-200'>
            I work with React Ecosystem and make videos to teach people how to
            rebuild and redefine fundamental programming concepts.
          </p>
        </div>
        <div className='my-auto px-8 duration-700 hover:scale-110'>
          <video
            className='shadow-xl shadow-primary-900'
            style={{ width: '460px', height: '270px' }}
            muted
            autoPlay
            poster='/images/thumb.png'
            src='/videos/reduce01-highlight.mp4'
            controls
          ></video>
          {/* <div>
            <div h-80 w-80>
              <iframe
                width='320'
                height='280'
                src='https://www.youtube.com/embed/jnd-BnjiujU'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
          </div> */}
        </div>
      </div>

      <div>
        <h1 className=' pt-6 text-center text-4xl text-neutral-100 underline decoration-violet-900 underline-offset-8'>
          Techs
        </h1>
      </div>
    </section>
  );
}
