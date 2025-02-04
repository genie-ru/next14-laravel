import * as Icon from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
const TopNav = () => {
  return (
    <>
      <div className = 'bg-slate-600'>
        <div className='container flex items-center justify-between h-[44px]'>
          <div className='left-block flex items-center'>
            <div className='location flex items-center max-lg:hidden'>
              <Icon.MapPin className='text-white text-xl' />
              <span className='ml-2 caption1 text-white'>160 Boradway 12 th floor, NewYork</span>
            </div>
            <div className='mail lg:ml-7 flex items-center'>
              <Icon.Envelope className='text-white text-xl' />
                <span className='ml-2 caption1 text-white'>
                  spport@easylearningbd.com</span>
            </div>
          </div>
          <div className='right-block flex items-center gap-5'>
            <div className='line h-6 w-px bg-grey max-sm:hidden'>

            </div>
            <div className='list-social flex items-center gap-2.5 max-sm:hidden'>
              <Link className='item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center' href="https://www.facebook.com/" target='_blank'>
              <Icon.FacebookLogo className="text-white text-base" />
              </Link>
              <Link className='item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center' href="https://www.linkedin.com/" target='_blank'>
              <Icon.LinkedinLogo className="text-white text-base" />
              </Link>
              <Link className='item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center' href="https://www.twitter.com/" target='_blank'>
              <Icon.TwitterLogo className="text-white text-base" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;