// import Stethoscope from '../../assets/Auth/Stethoscope.png'
import Injection from '../../assets/Auth/Injection.png'
// import {FcGoogle} from 'react-icons/fc'
// import {AiOutlineTwitter} from 'react-icons/ai'
// import {FaFacebook} from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import {auth, googleProvider, facebookProvider, twitterProvider} from '../../config/firebase'
import {auth} from '../../config/firebase'
// import { createUserWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import AuthenticatedPage from './AuthenticatedPage'
import { Dna } from 'react-loader-spinner'
import SocialMediaAuth from './SocialMedia/SocialMediaAuth'
import Login from './Login'



type UserProps = {
  user : Record<string, unknown>
}

const SignUp = () => {

  // const firebaseApp = useFirebaseApp()
  // const auth = useAuth()

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()
  const [hideLogin, setHideLogin] = useState(false)

    // const arrayUser =  [auth.currentUser]
    // console.log(arrayUser);
    const [user, setUser] = useState <UserProps | null >(null)
    // const [user, setUser] = useState <UserCredential | null>(null)
    const [loading, setLoading] =  useState(false)
    console.log(user);

  // console.log(auth?.currentUser)11
  // console.log(auth?.currentUser?.email)
  // console.log(auth?.currentUser?.photoURL)
  // console.log(auth?.currentUser?.phoneNumber)

   const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    try { 
      setLoading(true)
       const userData =  await createUserWithEmailAndPassword(auth, email, password)
       const user = userData.user 
       if (user) {
        (user as User).sendEmailVerification().then(() => {
          // Email sent successfully
          console.log('Verification email sent!');
        }).catch((error) => {
          // Handle any errors
          console.error('Error sending verification email:', error);
        });
      }
       setUser(user)
        navigate('/login')
       console.log(user);
      //  if(user.emailVerified) {
      //    navigate('/login')
      //  } else {
      //   console.log('Kindly provide a valid email');
      //  }
    } catch (err) {
        console.error('Signup Error:', err)
        setLoading(false)
    }
    finally {
      setLoading(false)
    }
   }


  //  const signInWithGoogle = async () => {
  //   try { 
  //     setLoading(true)
  //     const userData = await signInWithPopup(auth, googleProvider)
  //     setUser(userData)
  //     navigate('/login')
  //   } catch (err) {
  //       console.error('Google Sign-in Error:', err)
  //       setLoading(false)
  //   }
  //   finally {
  //     setLoading(false)
  //   }
  
  // }

  //  const signInWithTwitter = async () => {
  //   try { 
  //     setLoading(true)
  //     const result = await signInWithPopup(auth, twitterProvider)
  //     const credential = TwitterAuthProvider.credentialFromResult(result);d
  //     const token = credential.accessToken;
  //     const secret = credential.secret;

  //   // The signed-in user info.
  //   const user = result.user;
  //   setUser(user)
  //   navigate('/login')
  //   } catch (error) {
  //     // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = TwitterAuthProvider.credentialFromError(error);
  //       console.error('Apple Sign-in Error:', error)
  //       setLoading(false)
  //   }
  //   finally {
  //     setLoading(false)
  //   }

  // }

  //  const signInWithFacebook = async () => {
  //         try {
  //           setLoading(true)
  //       const result = await signInWithRedirect(auth, facebookProvider);
  //       const credential = FacebookAuthProvider.credentialFromResult(result);
  //       const accessToken = credential.accessToken;
  //       const user = result.user
  //       setUser(user)
  //       navigate('/login')
  //         console.log('Facebook sign-in successful:', user);
  //         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          
        
  //     } catch (error) {
  //         // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;



  //   const credential = FacebookAuthProvider.credentialFromError(error);
  //       console.error('Error signing in with Facebook:', error);
  //       setLoading(false)
  //     }
  //     finally {
  //       setLoading(false)
  //     }

  // }

   const logout = async () => {
    try { 
      await signOut(auth)
      console.log('User Logged  out')
    } catch (err) {
        console.error('Signup Error:', err)
    }
   }

   

  return (
    <>
    {loading && <Dna
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>}
    {/* {user ? <AuthenticatedPage user={user} /> : ( */}
    { hideLogin && <Login user={user} navigate={navigate} setLoading={setLoading} auth={auth}/>}
    <section className="bg-[#E0E4EC] text-black text-center text-xl h-auto w-full grid grid-cols-2">
      <article className="bg-white rounded-2xl ml-9 my-[4rem]">
        
        <h2 className='text-center font-bold text-4xl my-7'>Create An Account</h2>
        <form onSubmit={handleSignUp} className='flex flex-col gap-3 pl-7'>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            placeholder='Enter Name'
            required
            minLength={6}
            maxLength={12}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="name">Email Address</label>
          <input 
            type="email" 
            placeholder='Enter Email Address'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="name">Password</label>
          <input 
            type="password" 
            placeholder='Enter Password'
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className='bg-[#08299B] text-white text-xl w-1/2 mx-auto p-2 rounded-xl'>Create Account</button>

          <p className='w-1/2 mx-auto font-semibold text-2xl text-black'>OR</p>

            {/* SIGNIN ICONS  */}
          {/* <div className='w-1/2 mx-auto flex gap-6 justify-center'>
            <FcGoogle size="35" onClick={signInWithGoogle} class="cursor-pointer"/>
            <AiOutlineTwitter color="#1DA1F2" size="35" onClick={signInWithTwitter} class="cursor-pointer"/>
            <FaFacebook color="#1877F2" size="35" onClick={signInWithFacebook} class="cursor-pointer"/>
          </div> */}
          <SocialMediaAuth user={user} setUser={setUser} navigate={navigate} loading={loading} setLoading={setLoading}  auth={auth} setLoading={setLoading}/> 
          <p className='my-3'>Already have an account? <Link to="/login" className='text-[#08299B]'>Login</Link></p>
        </form>
        {/* <h2 className='h-screen text-center bg-red-500 text-white text-4xl'>Logged in successfully</h2> */}
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
    {/* )} */}
    </>
  )
}

export default SignUp 