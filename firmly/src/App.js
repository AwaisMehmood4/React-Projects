import './App.css';
import Home from './Routes/Home/Home.component.jsx';
import {useState, useEffect, Fragment} from 'react';
import Landing from './components/home/Landing.jsx';
import SignIn from './components/signin/SignIn';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/signup/SignUp';
import ResetPass from './components/reset-pass/ResetPass';
import User from './components/User/User.component';
import EditPersonalInfo from './components/User-personal-info/Edit-Personal-Info.component';
import Dashboard from './components/Dashboard/Dashboard.component';
import { UserAuthContextProvider } from './context/UserAuthContext.component';
import ProtectedRoute from './Routes/Home/ProtectedRoute';

// function App() {

//   const [loading, setLoading] = useState(false);

//    useEffect(()=> {
//       setLoading(true)
//       setTimeout(()=> {
//         setLoading(false)
//       },3000)
//   },[]);
 
//   return (
//     <Fragment>
//       {
//         loading ? <Landing /> : <Home/>
        

//     }    
    
//     </Fragment>
//   );
// }

function App(){
  return(
    <>
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-pass" element={<ResetPass />} />
        <Route path="/reset-pass" element={<ResetPass />} />
        <Route path='/user-profile' element={<ProtectedRoute><User /></ProtectedRoute>} /> 
        <Route path='/user-profile/edit-personal-info' element={<ProtectedRoute><EditPersonalInfo /></ProtectedRoute>} /> 
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
        </UserAuthContextProvider>

    </>
  )
}

export default App;
