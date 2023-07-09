import Avi from '../../../assets/Landing Page/Find Hospital/Avi.png'
import { Link } from "react-router-dom"

const Profile = () => {
  return (
    <section className="h-auto bg-white text-5xl grid grid-cols-[1fr_3fr_1fr]">
        <aside className='bg-white'>
            <header className='pb-[4rem]'>
                <h1 className="text-[#08299B] font-bold text-3xl p-3"> <Link to="/">Carefinder</Link></h1>
            </header>
            <article className=' border-r-[0.1px] border-black'>
                <nav className="">
            <ul className="list-none flex flex-col font-semibold text-xl ">
                <li className="text-slate-900 p-3 mb-4 bg-gray-500 w-full rounded-xl"><Link to="/profile">Profile</Link></li>
                <li className="text-[#0f0808] p-3">
                   <Link to="/findhospital">Find Hospital</Link>
                </li>
                <li className="text-slate-900 p-3">Book An Appointment</li>
                <li className="text-slate-900 p-3 w-full rounded-xl"><Link to="/">Home</Link></li>
                <li className="text-slate-900 p-3 w-full rounded-xl"><Link to="/">Search</Link></li>
                <li className="text-slate-900 p-3 w-full rounded-xl"><Link to="/">Library</Link></li>
               
            </ul>
        </nav>
            </article>
        </aside>
        <div className='bg-blue-500'>
            {/* Find Hospital Input */}
            <div>
                <input type="text" placeholder='Search Hospital' className='text-center' />
            </div>
        </div>
        <div className='bg-green-500'>
            <img src={Avi} alt="avatar" className="mx-auto"/>
        </div>
    </section>
  )
}

export default Profile