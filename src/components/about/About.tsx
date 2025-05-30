import PS from './client/PS';
import { SmotionDiv, SmotionHeader } from '@/libs/framer-motion';

const About = () => {
  return (
    <section
      className='overflow-hidden scrollbar-hidden bg-primary
                h-[400px]
                md:h-[450px]
                lg:h-[500px]'
    >
      {/* container */}

      <div
        className='flex flex-col items-center text-white
                mt-6
                sm:mt-9
                md:mt-12
                2xl:max-w-[100rem] 2xl:mx-auto'
      >
        {/* header */}
        <div>
          <SmotionHeader
            elementType='h2'
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: 'some', margin: '100% 0% -8% 0%' }}
            className='text-3xl sm:text-4xl font-extrabold'
          >
            About.
          </SmotionHeader>
          <SmotionDiv
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.38 }}
            viewport={{ amount: 'some', margin: '100% 0% -9% 0%' }}
            className='flex justify-center -mt-0.5'
          >
            <hr className='bg-white h-[0.2rem] w-12 sm:w-16 rounded-xl' />
          </SmotionDiv>
        </div>

        {/* body */}
        <SmotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ amount: 'some', margin: '100% 0% -8% 0%' }}
          className='font-semibold text-center
                px-4 mt-6 text-lg
                md:mt-12 md:text-xl
                lg:px-9'
        >
          {/* first sentence */}
          <SmotionDiv>
            <p>
              Hey! I am Denys, a full-stack dev {' '}
              <br className='hidden xxsm:block xsm:hidden' />who loves{' '}
              <br className='hidden xsm:block sm:hidden' /> building
              cool stuff <br className='hidden lg:block' /> with{' '}
              <br className='hidden xxsm:block xsm:hidden' /> React, Node, Laravel, Vue, Python, and PostgreSQL.{' '}
              <br className='hidden sm:block lg:hidden' />
              I’ve been coding <br className='hidden xsm:block sm:hidden' /> for
              6+ years—mostly <br className='hidden xxsm:block xsm:hidden' /> web apps,
              sometimes smart contracts.
            </p>
          </SmotionDiv>

          {/* @medium-device: second sentence */}
          <SmotionDiv className='hidden sm:block'>
            <p>
              Always up for a challenge,{' '}
              <span className='sm:hidden md:inline'>and </span>
              <span className='hidden lg:inline'>a good</span>{' '}
              <span className='sm:hidden md:inline'>cup of coffee ☕.</span>
              I am passionate <br className='hidden md:block lg:hidden' /> about{' '}
              <br className='hidden lg:block' /> creating{' '}
              <br className='hidden sm:block md:hidden lg:hidden' /> elegant and{' '}
              <span className='lg:hidden'>agile</span>{' '}
              <span
                className='hidden lg:inline
              '
              >
                efficient{' '}
              </span>
              solutions bringing novelty and comfort to{' '}
              <span className='lg:hidden'>life.</span>{' '}
              <span className='hidden lg:inline'>
                all aspects of human life
              </span>
            </p>
          </SmotionDiv>

          {/* third sentence */}
          <div className='mt-6 flex justify-center'>
            <PS />
          </div>
        </SmotionDiv>
      </div>
    </section>
  );
};

export default About;
