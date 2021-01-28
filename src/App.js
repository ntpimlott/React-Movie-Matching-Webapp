import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './components/layout/Header';
import Login from './components/Login/Login';
import Movies from './components/movieswipe/Movies';
import FriendsList from './components/friends/FriendsList';
import MyList from './components/userlist/MyList';
import FriendsMovieList from './components/friends/FriendsMovieList';

function App() {

  const [loginToken, setloginToken] = useState();
  const [user, setUser] = useState();
  const [userMovies, setuserMovies] = useState([]);
  const [friendsList, setfriendsList] = useState([]);

  useEffect(() => {
    if(loginToken){
      updateUserLists();
    }
    
  }, [user]);

  const pulluserMovies = async () => {
    const res = await axios.get('http://localhost:3000/mylist', { headers:{'Authorization':`Bearer ${loginToken}`},params: { userid: user } });
    setuserMovies(res.data);
  }

  const pullfriendsList = async () => {
    const res = await axios.get('http://localhost:3000/friends',{headers:{'Authorization':`Bearer ${loginToken}`},params: { userid: user } });
    setfriendsList(res.data);
  }

  const updateUserLists = async (e) => {
    await pulluserMovies();
    await pullfriendsList();
  }

  const removefromuserMovies = (movieid) =>{
    let list = userMovies.filter(x => {
      return x.movieid !== parseInt(movieid);
    })
    setuserMovies([... list]);
  }

  if (!loginToken || !userMovies || !friendsList) {
    return (
      <React.Fragment>
        <Login setloginToken={setloginToken} setUser={setUser} />
      </React.Fragment>)
  }

  return (
    <div className="App">
      <Router>
        <Header setloginToken={setloginToken} />
        <Switch>
          <Route exact path="/">
            <Movies user={user} loginToken={loginToken}></Movies>
          </Route>
          <Route path="/mylist">
            <MyList removefromuserMovies={removefromuserMovies} user={user} userMovies={userMovies} pulluserMovies={pulluserMovies} loginToken={loginToken}></MyList>
          </Route>
          <Route exact path="/friends">
            <FriendsList friendsList={friendsList}/>
          </Route>
          <Route path="/friends/:id" render={(props) => (
            <React.Fragment>
              <FriendsMovieList userMovies={userMovies} friendid={props.match.params.id} loginToken={loginToken} username={props.location.aboutProps}/>
            </React.Fragment>
          )}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
