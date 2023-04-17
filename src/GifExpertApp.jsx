import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const initial = ["One Punch"];

    const [category, setCategory] = useState(initial);

    const onAddCategory = (e) => {

        if (category.includes(e)) return;
        setCategory([e, ...category])
    };

    return (

        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCatgory={onAddCategory} />
            {/* <AddCategory setCategory={setCategory} /> */}

            {/* <button onClick={onAddCategory}>Agregar</button> */}


            {
                category.map((catg) => (
                    <GifGrid key={catg} category={catg} />
                ))
            }

        </>
    )
}
