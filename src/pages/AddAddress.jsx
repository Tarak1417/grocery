import React from 'react'
import { assets } from '../assets/assets'


//Input fields for address
const InputField=({type,placeholder,name,handleChange,address})=>(
    <input className='w-full px-2 py-2.5 border border-grey-500/30 rounded outlined-none text-grey-500 focous:border-primary transition '
     type={type}
      placeholder={placeholder}
      onChange={handleChange}
      name={name}
      value={address[name]}
      required/>
)
const AddAddress = () => {

  const [address,setAddress]=React.useState({
    firstName:"",
    lastName:"",
    address1:"",
    address2:"",
    city:"",
    state:"",
    country:"",
    zipCode:"",
  })

  const handleChange=(e)=>{
     const {name,value}=e.target
     setAddress((prevaddress)=>({
      ...prevaddress,
      [name]:value
     }))
  }

  const onSubmitHandler=(e)=>{
    e.preventDefault()
  }


  return (
    <div className='mt-16 pb-16'>
        <p className='text-2xl md:text-3xl text-grey-500'>Add Shipping <span className='font-semibold text-primary'>Address</span></p>
        <div className='flex flex-col reverse md:flex-row justify-between mt-10'>
            <div className='flex-1 max-w-md'>
             <form onSubmit={onSubmitHandler} className='space-y-3 mt-6 text-sm'>
               <div className='grid grid-cols-2 gap-4'>
                <InputField handleChange={handleChange} address={address} name="first name" type="text" placeholder="first name"/>
                <InputField handleChange={handleChange} address={address} name="Last name" type="text" placeholder="Last name"/>
               </div>
               <InputField handleChange={handleChange} address={address} name="email" type="email" placeholder="email"/>
               <InputField handleChange={handleChange} address={address} name="street" type="text" placeholder="street"/>
               <div className='grid grid-cols-2 gap-4'>
                <InputField handleChange={handleChange} address={address} name="city" type="text" placeholder="city"/>
                <InputField handleChange={handleChange} address={address} name="state" type="text" placeholder="state"/>
               </div>

               <div className='grid grid-cols-2 gap-4'>
                <InputField handleChange={handleChange} address={address} name="zipcode" type="number" placeholder="zipcode"/>
                <InputField handleChange={handleChange} address={address} name="country" type="text" placeholder="country"/>
               </div>
               <InputField handleChange={handleChange} address={address} name="phone" type="number" placeholder="phone"/>
               <button className='w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dull transition cursor-pointer uppercase ' type='submit'>
                save address
               </button>
               
             </form>
            </div>
            <img src={assets.add_address_iamge} alt="add Address" className='md:mr-16 mb-16 md:mt-0'/>

        </div>

      
    </div>
  )
}

export default AddAddress
