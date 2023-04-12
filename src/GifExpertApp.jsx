import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const initial = ["One Punch", "Dragon Ball"];

    const [category, setCategory] = useState(initial);

    const onAddCategory = (e) => {
        setCategory([e, ...category])
    };

    return (

        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCatgory={onAddCategory} />
            {/* <AddCategory setCategory={setCategory} /> */}

            {/* <button onClick={onAddCategory}>Agregar</button> */}

            <ol>
                {
                    category.map((catg, i) => {
                        return <li key={i}>{catg}</li>
                    })
                }
            </ol>
        </>
    )
}
