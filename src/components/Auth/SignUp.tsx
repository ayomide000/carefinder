// import Stethoscope from '../../assets/Auth/Stethoscope.png'
import Injection from '../../assets/Auth/Injection.png'
import {FcGoogle} from 'react-icons/fc'
import {BsApple} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {auth, googleProvider, appleProvider} from '../../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const SignUp = () => {

  // const firebaseApp = useFirebaseApp()
  // const auth = useAuth()

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()


  console.log(auth?.currentUser?.email)
  // console.log(auth?.currentUser?.phoneNumber)

   const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    try { 
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/login')
    } catch (err) {
        console.error('Signup Error:', err)
    }
   }


   const signInWithGoogle = async () => {
    try { 
      await signInWithPopup(auth, googleProvider)
    } catch (err) {
        console.error('Google Sign-in Error:', err)
    }
   }

   const signInWithApple = async () => {
    appleProvider.addScope('email')
    appleProvider.addScope('name')

    try { 
      await signInWithPopup(auth, appleProvider)
    } catch (err) {
        console.error('Apple Sign-in Error:', err)
    }
   }

   const logout = async () => {
    try { 
      await signOut(auth)
    } catch (err) {
        console.error('Signup Error:', err)
    }
   }

   

  return (
    <>
    <section className="bg-[#E0E4EC] text-black text-center text-xl h-auto w-full grid grid-cols-2">
      <article className="bg-white rounded-2xl ml-9 my-[4rem]">
        <h2 className='text-center font-bold text-4xl my-7'>Create An Account</h2>
        <form onSubmit={handleSignUp} className='flex flex-col gap-3 pl-7'>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            placeholder='Enter Name'
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="name">Email Address</label>
          <input 
            type="email" 
            placeholder='Enter Email Address'
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="name">Password</label>
          <input 
            type="password" 
            placeholder='Enter Password'
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className='bg-[#08299B] text-white text-xl w-1/2 mx-auto p-2 rounded-xl'>Create Account</button>

          <p className='w-1/2 mx-auto font-semibold text-2xl text-black'>OR</p>

            {/* SIGNIN ICONS  */}
          <div className='w-1/2 mx-auto flex gap-6 justify-center'>
            <FcGoogle size="35" onClick={signInWithGoogle}/>
            <BsApple color="#000" size="35" onClick={signInWithApple}/>
            <FaFacebook color="#1877F2" size="35"/>
          </div>
          <p className='my-3'>Already have an account? <Link to="/login" className='text-[#08299B]'>Login</Link></p>
        </form>
          <button onClick={logout} className='bg-[#08299B] text-white text-xl w-1/2 mx-auto p-2 rounded-xl'>Logout</button>
      </article>
      <article className='bg-Sthethoscope'>
        <h1 className='text-[#08299B] text-4xl font-bold text-center py-8'>Carefinder</h1>
        <h3 className='text-4xl font-bold text-center py-4 w-1/2 mx-auto leading-snug'>Join Our Community</h3>
        <p className='text-[#333232] text-xl font-semibold text-center py-2 w-1/2 mx-auto'>Enjoy seamless access to medical services</p>
        <div className='pb-12 pt-2'>
          <img src={Injection} alt="A nurse giving Injection to her patient" />
        </div>
      </article>
    </section>
    </>
  )
}

export default SignUp