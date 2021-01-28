import React, {useState, useEffect}from 'react'
import axios from 'axios';
import LoadingIcon from '../loading/LoadingIcon';
import CardLayout from '../layout/CardLayout';

const FriendsMovieList = ({userMovies, friendid, loginToken, username}) => {

    const [friendsMovies, setfriendsMovies] = useState([]);
    const [compareMovies, setcompareMovies] = useState(false);
    
    useEffect(()=>{
        let isMounted = true;

        const pullfriendMovies = async () => {
            const res = await axios.get('http://localhost:3000/mylist', { headers:{'Authorization':`Bearer ${loginToken}`},params: { userid: friendid } });
            const data = res.data;
            if(isMounted){
                setfriendsMovies(data);
            }
        }
        pullfriendMovies();
    },[])

    const listItems = () => {
        const list = friendsMovies.map((movie) => 
            <React.Fragment key={movie.movieid}>
                <li>
                    {movie.moviename}
                </li>
            </React.Fragment>
        )
        return list;
    }

    const listcompareItems = () => {
        const commonList = [];
        userMovies.map(x => {
            friendsMovies.map(y => {
                if(x.movieid === y.movieid){
                    commonList.push(x)
                }
            })
        })

        const list = commonList.map((movie) => 
            <React.Fragment key={movie.movieid}>
                <li>
                    {movie.moviename}
                </li>
            </React.Fragment>
        )
        return list;
    }

    return (
        <div>
            {!friendsMovies ? <LoadingIcon/> : <CardLayout title={<h1>{username}'s List</h1>}  body={!compareMovies ? listItems() : listcompareItems()} footer={<button onClick={() => setcompareMovies(!compareMovies) }>Compare to Own List</button>}/>}
        </div>
    )
}

export default FriendsMovieList
