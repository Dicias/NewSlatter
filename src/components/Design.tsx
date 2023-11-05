import React, { useState, useEffect } from 'react';
import { noRecharge} from '../helper/NoRecharge';
import InputValidation from './InputValidation';

interface DesignProps {
  errorValidator: () => string | boolean;
  error: boolean;
}
const Design = ({ errorValidator, error }: DesignProps): React.ReactNode => {
  const [isMobile, setIsMobile] = useState(true)
  useEffect( ()=>{
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // change to "false" in bigger screens
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // call the function when the page load
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className='flex bg-slate-700 min-h-screen justify-center items-center'>
      <section className='flex-col sm:flex sm:flex-row-reverse bg-white max-w-screen h-screen sm:h-min sm:rounded-3xl  roboto-font sm:p-5'>
        <section className='flex max-w-max'>
      {isMobile ? (
        <img className=' w-screen' src="illustration-sign-up-mobile.svg" alt="mobile image" />
      ) : (
        <img className='' src="illustration-sign-up-desktop.svg" alt="laptop image" />
      )}
        </section>

        <section className='sm:flex flex-col sm:justify-center sm:max-w-md'>
        <div className='p-2'>
        <h1 className=' text-4xl sm:text-5xl roboto-bold-font mt-10 mx-5 text-slate-800'>Stay updated!</h1>

      <section className='  mx-5 my-5 text-slate-900 text-base'>
        <p className='my-4'>Join 60,000+ product managers receiving monthly updates on:</p>
      
        <span className=' flex box-content'>
        <img className=' w-6 ' src='icon-list.svg' alt='icon-success' />
  <p className='my-2 mx-3'>Product discovery and building what matters</p>
  </span>

  <span className='flex box-content'>
  <img className=' w-6 ' src='/public/icon-list.svg' alt='icon-success' />
<p className='my-2 mx-3'>Measuring to ensure updates are a success</p>
</span>

<span className='flex box-content'>
<img className=' w-6 ' src='/assets/icon-list.svg' alt='icon-success' />
<p className='my-2 mx-3'>And much more!</p>
</span>
      </section>
    
    <section className='flex flex-col my-2 ml-2'>
        <form className='flex flex-col items-start' onSubmit={noRecharge} >
          <InputValidation error={error} />
          <button onClick={errorValidator} className=' w-11/12 sm:w-10/12 h-14 rounded-md text-white roboto-bold-font my-5 mx-2 btn-bg' type="submit">Subscribe to monthly newsletter</button>
        </form>
      </section>
      </div>
      </section>

    </section>
  </div>
  );
};

export default Design;
