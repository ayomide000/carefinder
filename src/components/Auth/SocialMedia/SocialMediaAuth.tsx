import {FcGoogle} from 'react-icons/fc'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import { googleProvider, facebookProvider, twitterProvider} from '../../../config/firebase'
// import {signInWithPopup, signInWithRedirect, FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth'
import {signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import {auth} from '../../../config/firebase'


type SignupProps = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
}

const SocialMediaAuth = ({setLoading}: SignupProps) => {

  const navigate = useNavigate()

    const signInWithGoogle = async () => {
        try { 
        setLoading(true)
        const userData = await signInWithPopup(auth, googleProvider)
        const user = userData.user
        // setUser(userData)
        if(user) {
          navigate('/login')
        }
        } catch (err) {
            console.error('Google Sign-in Error:', err)
            setLoading(false)
        }
        finally {
        setLoading(false)
        }
        
    }


const signInWithTwitter = async () => {
    try { 
      setLoading(true)
      const result = await signInWithPopup(auth, twitterProvider)
      // const credential = TwitterAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // const secret = credential.secret;

    // The signed-in user info.
    const user = result.user;
    // setUser(user)
    if(user) {
      navigate('/login')
    }
    } catch (error) {
      // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // The email of the user's account used.
    // const email = error.customData.email;
    // The AuthCredential type that was used.
    // const credential = TwitterAuthProvider.credentialFromError(error);
        console.error('Apple Sign-in Error:', error)
        setLoading(false)
    }
    finally {
      setLoading(false)
    }

}

const signInWithFacebook = async () => {
          try {
            setLoading(true)
        const result = await signInWithPopup(auth, facebookProvider);
        const user = result
        // const credential = FacebookAuthProvider.credentialFromResult(result);
        // const accessToken = credential.accessToken;
        // setUser(user)
        if(user) {
          console.log('Facebook sign-in successful:', user);
          navigate('/login')
        }
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          
        
      } catch (error) {
          // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;



    // const credential = FacebookAuthProvider.credentialFromError(error);
        console.error('Error signing in with Facebook:', error);
        setLoading(false)
      }
      finally {
        setLoading(false)
      }

}


  return (
    <div className='w-1/2 mx-auto flex gap-6 justify-center'>
        <FcGoogle size="35" onClick={signInWithGoogle} class="cursor-pointer"/>
            <AiOutlineTwitter color="#1DA1F2" size="35" onClick={signInWithTwitter} class="cursor-pointer"/>
            <FaFacebook color="#1877F2" size="35" onClick={signInWithFacebook} class="cursor-pointer"/>
    </div>
  )
}

export default SocialMediaAuth
