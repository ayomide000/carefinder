import Avi from '../../assets/Landing Page/Find Hospital/Avi.png'
import {AiOutlineSearch} from 'react-icons/ai'

const FindHospital = () => {
  return (
    <>
        <section className='h-screen bg-Map text-center text-black'>
            <article className="grid grid-cols-[3fr_1fr] pt-[4rem] ">
                <div className="pl-7 grid grid-cols-[2fr_1fr] justify-between">
                    <input type="text" placeholder="Address" className='rounded-lg mx-auto text-slate-500 text-base bg-white w-4/5'/>
                    <input type="text" placeholder="Zipcode" className='rounded-lg  text-slate-500 text-base bg-white'/>
                </div>
                <div className='flex gap-4 justify-center'>
                    <button className='bg-[#08299B] px-5 rounded-lg self-center py-2'><AiOutlineSearch class="text-white" size="25"/></button>
                    <img src={Avi} alt="Avi" className='h-14 self-center'/>
                </div>
            </article>
        </section>
        <section className='bg-white'>

        </section>
    </>
  )
}

export default FindHospital