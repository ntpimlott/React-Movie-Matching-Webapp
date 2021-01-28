import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard';
import LoadingIcon from '../loading/LoadingIcon';
import axios from 'axios';

const Movies = ({ user, loginToken}) => {

    const [moviesList, setmoviesList] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            const data = await fetchTasks();
            setmoviesList(data);
            setisLoading(false);
        }

        fetchData();
    }, [user])

    const fetchTasks = async () => {
        const res = await axios.get('http://localhost:3000/movies', { headers:{'Authorization':`Bearer ${loginToken}`},params: { userid: user } })
        const data = res.data;

        return data;
    }

    const updateMovies = (text) => {

        if (text === 'accept') {
            axios.post('http://localhost:3000/acceptmovie', null, { headers:{'Authorization':`Bearer ${loginToken}`},params: { userid: user, movieid: moviesList[0].movieid } }).then((res) => {
                let list = moviesList;
                list.shift();
                setmoviesList([...list]);
            })

        }
        else {
            axios.post('http://localhost:3000/rejectmovie', null, { headers:{'Authorization':`Bearer ${loginToken}`},params: { userid: user, movieid: moviesList[0].movieid } }).then((res) => {
                let list = moviesList;
                list.shift();
                setmoviesList([...list]);
            })
        }
    }

    return (
        <div >
            {isLoading ? <LoadingIcon /> : <MovieCard movie={moviesList[0]} updateMovies={updateMovies} />}
        </div>
    )
}

export default Movies