import React from 'react'
import {BeatLoader} from 'react-spinners';
import CardLayout from '../layout/CardLayout';

const LoadingIcon = () => {
    return (
        <div>
            <CardLayout body={<BeatLoader/>} bodyClass={"text-center"}/>
        </div>
    )
}

export default LoadingIcon