import React , { useEffect }from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth } from './firebase/firebase';


function App() {
 
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }
        ));
      }
      else{
        dispatch(logout());
      }
    });
   }, []);
  
  return (
    <div className="app">
        <Header/>

    { !user ? (
      <Login/>
    ) : ( 
      
        <div className="app_body">
          <Sidebar/>  
          <Feed />
          <Widgets/>

        </div>
    )}
    </div>
  );
}

export default App;
