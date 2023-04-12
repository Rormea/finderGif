import { useState } from 'react'

export const AddCategory = ({ onNewCatgory }) => {

    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) => {
        const value = e.target.value
        setInputValue(value)
        // console.log(value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const valueOk = inputValue.trim()
        if (valueOk.length < 1) return;
        // setCategory(catg => [inputValue, ...catg])
        onNewCatgory(valueOk)
        setInputValue("")
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Search for Gif'
                value={inputValue}
                onChange={handleChange}
            />
        </form>
    )
}
