import Dashboard from "../../components/Dashboard/Dashboard.component";
import Header from "../../components/header/Header";
import ResetPass from "../../components/reset-pass/ResetPass";
import SignIn from "../../components/signin/SignIn";
import SignUp from "../../components/signup/SignUp";
import EditPersonalInfo from "../../components/User-personal-info/Edit-Personal-Info.component";
import User from "../../components/User/User.component";

import {Routes, Route} from 'react-router-dom';
import Landing from "../../components/home/Landing";


const Home = () => {
    return(
        <Routes>

            <Route  path='/' element={<Header />}>
                <Route index element={<SignIn />} /> 
                <Route path='/signup' element={<SignUp />} /> 
                <Route path='/reset-pass' element={<ResetPass/>} /> 
                <Route path='/user-profile' element={<User/>} /> 
                <Route path='/user-profile/edit-personal-info' element={<EditPersonalInfo />} /> 
                <Route path='/dashboard' element={<Dashboard />} />
            </Route> 
        </Routes>
        
    );
}

export default Home;