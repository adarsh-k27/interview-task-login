import { useContext, useState,useEffect } from 'react';
import { LoginUser } from './apiHelper';
import {getAuth} from 'firebase/auth'
import {app} from './firebase.config'
import './App.css';
import Login from './Login';
import UserContext from './Context/index'
import RouterWraper from './RoutWraper';
import {useNavigate} from 'react-router-dom'
function App() {
  const firebaseAuth = getAuth(app);
  const {UserLogin} =useContext(UserContext)
  const [auth,setAuth]=useState(false)
  const Navigate=useNavigate()
  useEffect(() => {
    const aUTHS=localStorage.getItem('auth')
    if (localStorage.getItem("auth") == false) {
      console.log("AUTH FALSE");
      Navigate("/");
    }
    firebaseAuth.onAuthStateChanged((userCred) => {
      if (userCred) {
        userCred.getIdToken().then((token) => {
          LoginUser(`Bearer ${token}`, UserLogin);
        });
      } else {
        setAuth(false);
        window.localStorage.setItem("auth", false);
        UserLogin(null);
        Navigate("/");
      }
    });
  }, []);

  return (
    <div className="App">
      <RouterWraper setAuth={setAuth} />
    </div>
  );
}

export default App;
