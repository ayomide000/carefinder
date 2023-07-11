// import IMG1 from '../../assets/Landing Page/Section1.jpg'
import Rec1 from '../../assets/Landing Page/Rectangle 1.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {CiLocationOn} from 'react-icons/ci'
import {AiOutlineSearch} from 'react-icons/ai'

const SectionOne = () => {
  return (
    <section className="bg-[#E0E4EC] pb-5">
        {/* Container */}
        <div className="pl-5 py-10 grid grid-cols-[1fr_1.5fr] gap-5">
            {/* Grid Text */}
             <article>
                <div className='my-5'>
                    <h2 className="text-[#08299B] font-bold text-[38px] text-center mt-[4rem] leading-snug"> Find the nearest hospital to you and make an appointment</h2>
                    <p className="font-semibold text-slate-900 text-center text-3xl mt-6 mb-12">Discover Your Perfect Care: Find Your Hospital, Anytime, Anywhere!</p>
                    <button className="uppercase bg-[#08299B] text-white text-2xl p-2 italic block w-1/2 mx-auto">Get Started</button>
                    <p className='block w-1/2 mx-auto pt-7 '><a className='flex text-center justify-center text-slate-900' href="#">Learn More <AiOutlineArrowRight color="#08299B" class="mt-1 ml-1"/></a></p>
                </div>
             </article>
             {/* Gird Image */}
            <article>
                <img src={Rec1} alt="A woman receiving treatment" className='h-[38rem] w-[51rem] bg-transparent'/>
            </article>
        </div>

        <div>
            <p className='text-center text-[#08299B] font-bold text-2xl'>Find a nearby hospital</p>
            <div className="w-1/2 mx-auto mt-1 mb-5 block ">
                <CiLocationOn color="#C1C1C1" class="translate-y-7 translate-x-5"/>
                <input type="text" placeholder="Federal Medical Center, Ebutte Metta,Lagos State" className=" rounded-2xl p-2 text-center text-[#C1C1C1] font-thin text-md bg-white w-full" required/>
                <AiOutlineSearch color="#000" class="-translate-y-8 translate-x-[39rem]"/>
            </div>
        </div>
    </section>
  )
}

export default SectionOne