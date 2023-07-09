import {FcGoogle} from 'react-icons/fc'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import { googleProvider, facebookProvider, twitterProvider} from '../../../config/firebase'
import {signInWithPopup, signInWithRedirect, FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth'



const SocialMediaAuth = ({ setUser, navigate, setLoading, auth}) => {

    const signInWithGoogle = async () => {
        try { 
        setLoading(true)
        const userData = await signInWithPopup(auth, googleProvider)
        setUser(userData)
        navigate('/login')
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
      const credential = TwitterAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const secret = credential.secret;

    // The signed-in user info.
    const user = result.user;
    setUser(user)
    navigate('/login')
    } catch (error) {
      // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = TwitterAuthProvider.credentialFromError(error);
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
        const result = await signInWithRedirect(auth, facebookProvider);
        const user = result.user
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        setUser(user)
        navigate('/login')
          console.log('Facebook sign-in successful:', user);
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          
        
      } catch (error) {
          // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;



    const credential = FacebookAuthProvider.credentialFromError(error);
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
