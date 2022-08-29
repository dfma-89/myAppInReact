import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState (initial);

    const increase = () => {
        const newValue = count + 1;
        if (newValue <= stock) {
            setCount(newValue);
        }
    }

    const decrease = () => {
        const newValue = count - 1;
        newValue >= initial && setCount (newValue);
    }

    const agregaItems = () => {
        alert ("Agregaste productos a tu carrito");
    }

    return (
        <div>
            <h1>Count</h1>
            <h3>Tukicount {count} TukiProduct!</h3>
            <h3> Stock: {stock}</h3>
            <button onClick={increase}>Click Me To Add!</button>
            <button onClick={decrease}>Click Me to Quit!</button>
            <button onClick={agregaItems}>Add to Cart</button>
        </div>
    );

};

export default ItemCount;