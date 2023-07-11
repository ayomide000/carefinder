
// // import { useEffect, useState } from 'react';
// // import {auth} from '../../config/firebase'// Assuming you have set up Firebase and imported the auth object
// // import Login from './Login';
// import SignUp from './SignUp';
// import FindHospital from '../FindHospital/FindHospital';


// const AuthenticatedPage: React.FC = ({ user }) => {
//   // const [user, setUser] = useState<User | null>(null);

//   // useEffect(() => {
//   //   const unsubscribe = auth.onAuthStateChanged((user) => {
//   //     setUser(user);
//   //   });

//   //   return () => {
//   //     unsubscribe();
//     // };
//   // }, []);

//   // if (!user) {
//   //   // User is not logged in, you can redirect or show a login page
//   //   return <Login />;
//   // }

//   // // User is logged in, show the authenticated page
//   // return <div>Welcome, {user.email}!</div>;
// return (
//   <div className='h-screen relative z-10'>
//     {user ? <FindHospital /> : <SignUp />}
//   </div>
// )
// };

// export default AuthenticatedPage;
