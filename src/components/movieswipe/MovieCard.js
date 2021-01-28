import React from 'react'
import { Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardLayout from '../layout/CardLayout';

const MovieCard = ({ movie, updateMovies }) => {

    const acceptMovie = (e) => {
        updateMovies("accept");
    }

    const rejectMovie = (e) => {
        updateMovies("reject");
    }

    if (!movie) {
        return (
            <CardLayout title={"No More Movies Available"}/>
        )
    }

    const buttonExport =              <Row>
    <Col className="text-center">
        <Button onClick={acceptMovie}>Accept</Button>
    </Col>
    <Col className="text-center">
        <Button onClick={rejectMovie}>Reject</Button>
    </Col>
</Row>

    return (
        <div>
            <CardLayout title={movie.moviename} body={buttonExport} bodyClass={"text-center"}/>
        </div>
    )
}

export default MovieCard
