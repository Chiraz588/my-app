
import { Route } from 'react-router-dom';
import './App.css';
import Messages from "./Components/message/Message";
import Footer from './Components/footer/Footer';
import Contactpage  from './Components/ContactPage/ContactPage';
import Profile from './Components/profile/Profile.js';
import RegisterLogin from './Components/registration/Register';
import Invitedreg from './Components/registration/invitedreg';
import TinderCards from './Components/TinderCards/TinderCards.js';
import EditProfile from './Components/profile/components/EditProfile';
import Login from './Components/registration/login';
import Home from './Components/home/Home';
import Admin from './Components/Admin/Admin';

import PrivateRoute from './privateroutes/PrivateRoute';

function App() {

  return (
    <div className="App">
    <Route  path='(/)' component={Home} />
    <Route path='(/SignUp)'  component={RegisterLogin}     />
    <Route path='(/SignIn)'  component={Login} />
    <Route path='(/Invited)'  component={Invitedreg}     />
    <Route   path='(/TinderCards)'   component={TinderCards} />
    <Route path='(/ContactPage)' component={Contactpage}/>  
    
    <Route path='(/EditProfile)' component={EditProfile} />
    <Route path='(/login)'  component={Login} />
    <Route path='(/Admin)'  component={Admin}  />  
    <Route path='(/Messages)'  component={Messages}  />    
    
  
   <PrivateRoute   path='/Profile'  component={Profile} />
  
   <Footer/> 
    </div>
 
   
  );
}

export default App;
