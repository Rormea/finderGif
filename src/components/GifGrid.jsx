import React from 'react'
// import getGifs from '../helpers/getGifs';
import { GifCard } from './GifCard'
import { useEffect, useState } from 'react';
import { useFetchGif } from '../hooks/useFetchGif'

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGif(category)

    // const [images, setImages] = useState([])

    // const getImges = async () => {
    //     const newImages = await getGifs(category)
    //     setImages(newImages)
    // };

    // useEffect(() => {
    //     getImges();
    // }, [])

    return (
        <div>
            <h3>{category}</h3>

            {
                isLoading && <h2>Cargando...</h2>
            }

            <div className='card-grid'>
                {
                    images && images.map((img) =>
                        // <li key={el.id}>{el.title}</li>
                        <GifCard
                            key={img.id}
                            {...img}
                        />
                    )
                }
            </div>
        </div>
    )
}
