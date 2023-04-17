import getGifs from '../helpers/getGifs';
import { useEffect, useState } from 'react';




export const useFetchGif = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImges = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(false)
    };

    useEffect(() => {
        getImges();
    }, [])


    return {
        images,
        isLoading
    }
};
