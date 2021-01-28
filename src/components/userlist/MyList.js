import React, { useEffect } from 'react'
import axios from 'axios';
import CardLayout from '../layout/CardLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyList = ({ removefromuserMovies, user, userMovies, pulluserMovies, loginToken }) => {

    useEffect(() => {
        pulluserMovies();
    }, [])


    const removeMovie = async (e) => {
        await axios.post('http://localhost:3000/removefromymylist', null, { headers: { 'Authorization': `Bearer ${loginToken}` }, params: { userid: user, movieid: e.target.value } });
        removefromuserMovies(e.target.value);
    }

    const listItems = () => {
        const list = userMovies.map((movie) =>
            <React.Fragment key={movie.movieid}>
                <li>
                    {movie.moviename}
                    <button onClick={removeMovie} value={movie.movieid}>x</button>
                </li>
            </React.Fragment>
        )
        return (
            <React.Fragment>
                <ul>
                    {list}
                </ul>
            </React.Fragment>);
    }

    const resetRejectedMovies = () => {
        axios.post('http://localhost:3000/rejectedmovies', null, { headers: { 'Authorization': `Bearer ${loginToken}` }, params: { userid: user } });
    }

    return (
        <CardLayout title={<h1>My List</h1>} body={listItems()} footer={<button onClick={resetRejectedMovies} className="text-center">Reset Rejected Movies</button>} />

    )
}

export default MyList