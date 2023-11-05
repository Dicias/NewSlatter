interface DesignProps {
  comeBack: () => void;
  email: string;
}

const SubDesign = ({email, comeBack} : DesignProps): JSX.Element =>{
    return(
      <div className='flex bg-slate-700 min-h-screen justify-center items-center'>
      <section className='flex-col sm:flex sm:flex-col bg-white max-w-screen sm:max-w-md  h-screen sm:h-min sm:rounded-3xl  roboto-font sm:p-5'>

        <section className='flex flex-col sm:justify-center sm:max-w-md h-2/5 justify-end'>
        <img className=' w-16 mx-5 my-10 sm:my-5' src='../../assets/icon-success.svg' alt='icon-success' />
        <h1 className=' text-5xl sm:text-5xl roboto-bold-font  mx-5 text-slate-800'>Thanks for subscribing!</h1>
        </section>

      <section className='flex flex-col h-2/4 justify-between  mx-5 my-2 text-slate-900 text-base items-center'>
        <p className='my-2'>A confirmation email has been sent to <b>{email}.</b> Please open it and click the button inside to confirm your subscription</p>
      <button className=' w-11/12 sm:w-10/12 h-14 rounded-lg text-white roboto-bold-font sm:my-5 mx-2 btn-bg' type="submit" onClick={comeBack}> Dismiss message </button>
      </section>

    </section>
  </div>
    )
}

export default SubDesign;