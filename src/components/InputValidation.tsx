const InputValidation = ({ error }: {error : boolean} ):JSX.Element =>{

if(error) {  
  //Error input
  return (
    <div className="grid w-full">
      <div className="flex">
  <label className=' w-2/4 ml-2 roboto-bold-font text-sm '>Email address</label>
  <label className=' w-2/4 ml-2 roboto-bold-font text-sm text-orange-500 '>Valid Email Required</label>
  </div>
  <input id='email' className='w-11/12 sm:w-10/12 h-12 rounded-md text-orange-500 bg-red-100 border border-orange-500  p-2 m-2 pl-4' type="text" placeholder='email@company.com'  />
   </div>
    )
}
  //normal input
  return (

  <div className="grid w-full">
  <div className="flex">
<label className=' w-2/4 ml-2 roboto-bold-font text-sm '>Email address</label>
</div>
<input id='email' className='w-11/12 sm:w-10/12 h-12 rounded-md border border-pink-950 p-2 m-2 pl-4' type="text" placeholder='email@company.com' required={true} />
</div>
  )
}

export default InputValidation;