import Avi from '../../../assets/Landing Page/Find Hospital/Avi.png'
import { Link } from "react-router-dom"

const Profile = () => {
  return (
    <section className="h-auto bg-white grid grid-cols-[1fr_3fr_1fr] py-[3rem]">
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
        <div className='bg-blue-500 pl-7 text-black'>
            {/* Find Hospital Input */}
            <div>
                <input type="text" placeholder='Search Hospital' className='bg-white mt-8' />
            </div>
            <h1 className='text-[#08299B] font-bold text-center text-3xl uppercase my-5'>Profile Details</h1>

            <form  className='flex flex-col gap-3 '>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            placeholder='Enter Name'
            required
            minLength={6}
            maxLength={12}
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            placeholder='Enter Email Address'
            required
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="address">Address</label>
          <input 
            type="text" 
            placeholder='Enter Address'
            required
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />

          <button className='bg-[#08299B] text-white text-xl w-1/4 mx-auto p-2 rounded-xl'>Save</button>

            {/* SIGNIN ICONS  */}
          {/* <div className='w-1/2 mx-auto flex gap-6 justify-center'>
            <FcGoogle size="35" onClick={signInWithGoogle} class="cursor-pointer"/>
            <AiOutlineTwitter color="#1DA1F2" size="35" onClick={signInWithTwitter} class="cursor-pointer"/>
            <FaFacebook color="#1877F2" size="35" onClick={signInWithFacebook} class="cursor-pointer"/>
          </div> */}
          {/* <SocialMediaAuth user={user} setUser={setUser} navigate={navigate} loading={loading} setLoading={setLoading}  auth={auth} setLoading={setLoading}/>  */}
        </form>
        </div>
        <div className='bg-green-500'>
            <img src={Avi} alt="avatar" className="mx-auto"/>
        </div>
    </section>
  )
}

export default Profile