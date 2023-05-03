import { useState } from "react";

const UseStateEx = () => {
    const [items, setItems] = useState([]);//reactive array that is updated with values entered in the input box
    const [name, setName] = useState("");//how we capture the value in the input box

    const addItem = event => {
        event.preventDefault();
        setItems([...items, name]);
        setName("");
    }

    return (
        <>
            <form onSubmit={addItem}>
                <input type="text" name="item" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit">Add Item</button>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </form>
        </>
    )
}
export default UseStateEx;